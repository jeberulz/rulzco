import AnimeText from "./AnimeText";

export function About() {
  return (
    <AnimeText
      paragraphs={[
        "Rulz&Co stays intentionally small. The person defining your agent's behaviour is the person designing and building the interface around it.",
      ]}
      keywords={["intentionally", "designing", "building"]}
      keywordColors={{
        intentionally: "#FFC703",
        designing: "#FFC703",
        building: "#FFC703",
      }}
      pinDuration={3}
    />
  );
}
