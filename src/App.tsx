import React from 'react';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(item=>{
              return <CoreConcept title={item.title} description={item.description} image={item.image} />
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
