import React, { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  function handleSelect(selectedOption: string) {
    setSelectedOption(selectedOption);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
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
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={ selectedOption === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={ selectedOption === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={ selectedOption === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={ selectedOption === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
