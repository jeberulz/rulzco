import AnimeText from "./AnimeText";

export function About() {
  return (
    <AnimeText
      paragraphs={[
        "Rulz&Co is intentionally small. That's how I stay hands-on, move fast, and stay close to the work, from early ideas through to shipped products.",
      ]}
      keywords={["intentionally", "hands-on", "fast"]}
      keywordColors={{
        intentionally: "#FFC703",
        "hands-on": "#FFC703",
        fast: "#FFC703",
      }}
      pinDuration={3}
    />
  );
}
