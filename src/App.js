import React from 'react';
import './App.css';
import Navbar from '../src/Navbar/Navbar';
import Sobre from '../src/Sobre/sobre';
import Skills from '../src/SkillsMenu/SkillsMenu';
import Projetos from '../src/ProjectCarousel/ProjectCarousel';
import Rodape from '../src/Rodape/Rodape';
import ContactButton from '../src/ContactButtons/ContactButtons';


function App() {
  return (
    
    <div className="App">

      <ContactButton />

      <section>
        <div>
          <Navbar />
        </div>
      </section>
    

      <section id='sobre'>
        <div>
          <Sobre />
        </div>
      </section>

      <section id='Habilidades'>
        <div>
          <Skills />
        </div>
      </section>

      <section id='projetos'>
        <div>
          <Projetos />
        </div>
      </section>
      
      <section>
        <div>
        <Rodape />
        </div>
      </section>


    </div>
  );
}

export default App;