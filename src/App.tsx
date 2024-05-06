import React from "react";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
