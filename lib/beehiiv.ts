/**
 * Beehiiv subscriber wrapper. All newsletter writes go through here so the
 * API key + publication id live in one place and callers get a typed result
 * instead of a raw fetch.
 *
 * Env:
 *  - BEEHIIV_API_KEY         (server-only)
 *  - BEEHIIV_PUBLICATION_ID  (e.g. "pub_xxx")
 */

const BEEHIIV_API = "https://api.beehiiv.com/v2";

export type SubscribeResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

export async function subscribeToNewsletter(
  email: string,
): Promise<SubscribeResult> {
  const apiKey = process.env.BEEHIIV_API_KEY?.trim();
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID?.trim();

  if (!apiKey || !publicationId) {
    return {
      ok: false,
      status: 503,
      error: "Newsletter signup isn't configured yet.",
    };
  }

  try {
    const res = await fetch(
      `${BEEHIIV_API}/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "the-dispatch",
        }),
      },
    );

    if (!res.ok) {
      // Don't leak Beehiiv internals to the client; log server-side detail.
      const detail = await res.text().catch(() => "");
      console.error("[beehiiv] subscribe failed", res.status, detail.slice(0, 500));
      return {
        ok: false,
        status: 502,
        error: "Couldn't complete signup right now. Please try again.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("[beehiiv] subscribe threw", err);
    return {
      ok: false,
      status: 502,
      error: "Couldn't reach the newsletter service. Please try again.",
    };
  }
}
