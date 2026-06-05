/**
 * Generates editorial cover images for each article in lib/articles.ts
 * using the Recraft.ai REST API, saves them to public/images/news/<id>.png,
 * and rewrites lib/article-image-manifest.ts with the resulting mapping.
 *
 * Usage:
 *   npm run gen:news-images          # generates only missing images
 *   FORCE=1 npm run gen:news-images  # regenerates all
 */

import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { articles } from "../lib/articles";

const API_KEY = process.env.RECRAFT_API_KEY;
const API_URL = "https://external.api.recraft.ai/v1/images/generations";
const STYLE = process.env.RECRAFT_STYLE || "digital_illustration";
const SUBSTYLE = process.env.RECRAFT_SUBSTYLE || undefined;
const SIZE = process.env.RECRAFT_SIZE || "1820x1024";
const FORCE = process.env.FORCE === "1" || process.env.FORCE === "true";

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, "public", "images", "news");
const MANIFEST_PATH = path.join(ROOT, "lib", "article-image-manifest.ts");
const PUBLIC_PATH_PREFIX = "/images/news";

if (!API_KEY) {
  console.error(
    "\n❌ Missing RECRAFT_API_KEY. Add it to .env.local and try again.\n"
  );
  process.exit(1);
}

// Per-article editorial prompts. Each one targets a moody, conceptual
// magazine cover aesthetic with a deep palette + warm gold accent that
// matches the Rulz&Co brand. We deliberately avoid asking for any text
// in the image (AI is bad at typography).
const PROMPTS: Record<string, string> = {
  "ai-design-convergence":
    "Abstract editorial cover illustration: a fractured silver mirror reflecting fragments of design tool icons and abstract UI shapes, deep navy and electric violet background, a single warm gold light source from the lower left, conceptual minimal composition, dramatic atmospheric lighting, soft film grain, magazine cover quality, no text, no letters",
  "founder-market-fit":
    "Abstract editorial cover illustration: a lone figure standing at the fork of two diverging mountain trails at dusk, deep amber and burnt orange sky, warm gold accent light at the vanishing point, cinematic minimal composition, soft film grain, magazine cover quality, no text, no letters",
  "design-systems":
    "Abstract editorial cover illustration: scattered geometric building blocks slowly forming a labyrinth from above, deep forest green and slate background, gold accent highlights catching the edges, conceptual minimal composition, moody atmospheric lighting, soft film grain, magazine cover quality, no text, no letters",
  "enterprise-ux-debt":
    "Abstract editorial cover illustration: a vast top-down view of a cluttered desk with overlapping translucent screens and tangled cables, deep midnight navy and electric blue palette, a single warm gold lamp glow, conceptual minimal composition, atmospheric lighting, soft film grain, magazine cover quality, no text, no letters",
  "studio-notes-q1":
    "Abstract editorial cover illustration: a moody studio workspace after hours, scattered notebooks and pencils on a wooden surface, deep crimson and burgundy palette, warm gold desk lamp glow, conceptual minimal composition, cinematic lighting, soft film grain, magazine cover quality, no text, no letters",
  "betting-on-taste":
    "Abstract editorial cover illustration: a curator's gloved hand selecting a single object from rows of nearly identical sculptures on plinths, deep forest green and olive palette, warm gold spotlight highlighting the chosen one, conceptual minimal composition, museum-quality atmosphere, soft film grain, magazine cover quality, no text, no letters",
  "designing-agents":
    "Abstract editorial cover illustration: glowing thought patterns and network nodes emerging from a darkened workspace, deep navy and slate blue palette, warm gold accent light pulsing along the network lines, conceptual minimal composition, atmospheric lighting, soft film grain, magazine cover quality, no text, no letters",
  "pitch-deck-design":
    "Abstract editorial cover illustration: a stack of pitch deck pages frozen mid-flight against a moody backdrop, deep amber and bronze palette, warm gold light catching the edges of each page, conceptual minimal composition, cinematic lighting, soft film grain, magazine cover quality, no text, no letters",
};

function promptFor(article: { id: string; title: string; category: string }) {
  return (
    PROMPTS[article.id] ??
    `Abstract editorial cover illustration about "${article.title}" (theme: ${article.category}), deep moody palette with warm gold accent light, conceptual minimal composition, cinematic lighting, soft film grain, magazine cover quality, no text, no letters`
  );
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

type RecraftResponse = {
  data: { url?: string; b64_json?: string }[];
};

async function generateOne(article: (typeof articles)[number]) {
  const prompt = promptFor(article);

  const body: Record<string, unknown> = {
    prompt,
    style: STYLE,
    size: SIZE,
    n: 1,
    model: "recraftv3",
  };
  if (SUBSTYLE) body.substyle = SUBSTYLE;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Recraft API ${res.status}: ${text.slice(0, 400)}`);
  }

  const json = (await res.json()) as RecraftResponse;
  const url = json.data?.[0]?.url;
  const b64 = json.data?.[0]?.b64_json;

  let buffer: Buffer;
  if (b64) {
    buffer = Buffer.from(b64, "base64");
  } else if (url) {
    const imgRes = await fetch(url);
    if (!imgRes.ok) throw new Error(`Image download ${imgRes.status}`);
    buffer = Buffer.from(await imgRes.arrayBuffer());
  } else {
    throw new Error("Recraft response had no url or b64_json");
  }

  const target = path.join(OUTPUT_DIR, `${article.id}.png`);
  await fs.writeFile(target, buffer);
  return target;
}

async function writeManifest() {
  const files = (await fs.readdir(OUTPUT_DIR)).filter((f) =>
    f.toLowerCase().endsWith(".png")
  );
  const entries = files
    .map((f) => path.basename(f, path.extname(f)))
    .sort()
    .map((id) => `  "${id}": "${PUBLIC_PATH_PREFIX}/${id}.png",`)
    .join("\n");

  const content = `// Auto-generated by scripts/generate-news-images.ts.
// Maps article id → public image path. Re-run \`npm run gen:news-images\`
// to refresh. Empty until images are generated.
export const ARTICLE_IMAGES: Record<string, string> = {
${entries}
};
`;
  await fs.writeFile(MANIFEST_PATH, content);
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  console.log(`📁 output: ${path.relative(ROOT, OUTPUT_DIR)}`);
  console.log(
    `🎨 style: ${STYLE}${SUBSTYLE ? ` / ${SUBSTYLE}` : ""}  size: ${SIZE}  force: ${FORCE}\n`
  );

  let generated = 0;
  let skipped = 0;
  const failures: { id: string; err: unknown }[] = [];

  for (const article of articles) {
    const target = path.join(OUTPUT_DIR, `${article.id}.png`);
    if (!FORCE && (await fileExists(target))) {
      console.log(`✓ skip   ${article.id} (exists)`);
      skipped++;
      continue;
    }

    process.stdout.write(`→ gen    ${article.id} ... `);
    try {
      await generateOne(article);
      console.log("done");
      generated++;
    } catch (err) {
      console.log("failed");
      console.error(`  ↳`, err instanceof Error ? err.message : err);
      failures.push({ id: article.id, err });
    }
  }

  await writeManifest();

  console.log(
    `\n${generated} generated · ${skipped} skipped · ${failures.length} failed`
  );
  console.log(
    `📝 manifest written: ${path.relative(ROOT, MANIFEST_PATH)}\n`
  );

  if (failures.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
