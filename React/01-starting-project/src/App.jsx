import { CORE_CONCEPTS } from "./data.js"
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {

  const [selectedTopics,setSelectedTopics] = useState('');

  function handleSelect(selectedButton){
    setSelectedTopics(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>please select a topic</p>
  
  if(selectedTopics){
    tabContent = (
      <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopics].title}</h3>
              <p>{EXAMPLES[selectedTopics].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopics].code}
                </code>
              </pre>
             </div>

    );
  }

  return (
    
 
    <div>
     
      <Header />
      
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept 
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
        />
        <CoreConcept {... CORE_CONCEPTS[1]}/>
        <CoreConcept {... CORE_CONCEPTS[2]}/>
        <CoreConcept {... CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
             <menu>
              <TabButton isSelected={selectedTopics === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopics === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton> 
              <TabButton isSelected={selectedTopics === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopics === 'state'} onSelect={()=>handleSelect('state')}>State</TabButton>
             </menu>
             {tabContent}
        </section>
        
      </main>
    </div>
  );
}

export default App;