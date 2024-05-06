import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedOption, setSelectedOption] = useState("");
  function handleSelect(selectedOption: string) {
    setSelectedOption(selectedOption);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={<><TabButton
          isSelected={selectedOption === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedOption === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedOption === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedOption === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton></>}>
        {selectedOption === "" ? (
          <p>Please select an option</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedOption as keyof typeof EXAMPLES].title}</h3>
            <p>
              {EXAMPLES[selectedOption as keyof typeof EXAMPLES].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedOption as keyof typeof EXAMPLES].code}
              </code>
            </pre>
          </div>
        )}
      </Tabs>
      <menu>
        
      </menu>
    </Section>
  );
}
