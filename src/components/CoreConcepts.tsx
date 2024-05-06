import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return (
            <CoreConcept
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </ul>
    </Section>
  );
}
