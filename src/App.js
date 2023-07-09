import React from 'react';
import './App.css';
import capa from './img/bg-pattern-card.svg';
import foto from './img/1620946670858.jpg';

const projects = [
  {
    title: 'Calculadora',
    description: 'Desenvolvimento de calculadora simples utilizando JavaScript',
    link: 'https://calculadora-web-sooty.vercel.app/',
    image: '',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2.',
    link: 'https://link-do-projeto-2.com',
    image: 'https://caminho-da-imagem-2.jpg'
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3.',
    link: 'https://link-do-projeto-3.com',
    image: 'https://caminho-da-imagem-3.jpg'
  }
];

const skills = ['HTML', 'JavaScript', 'CSS', 'React'];

function App() {
  return (
    <div className="App">
      <header>
        <div className="top-bar">
          <div className="logo">
            <h1>Portfólio</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#formacao">Formação</a></li>
              <li><a href="#projetos">Projetos</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-content">
          
        </div>
      </header>

      <div className='Capa'>
      <section id="sobre">
        <div className="section-content">
          <div className='box'>
        <img src={capa} className='capa'/>
          <img src={foto} className='foto'/>
          <h3>Klinger Hudson Ribeiro <span>, 23</span></h3>
          <p>Salvador - BA</p>
          <p>"Desenvolvedor web. 
          Tenho cerca de 1 ano de experiência na área e estou em busca 
          de uma oportunidade como desenvolvedor web júnior. 
          Sou pró-ativo, colaborativo e estou sempre disposto a 
          aprender e me adaptar a novas tecnologias. Estou animado 
          para fazer parte de uma equipe dinâmica e contribuir com 
          soluções web."</p>
          </div>
        </div>
      </section>
      <section id="formacao">
        <div className="secao-formacao">
          <h2>Formação</h2>
          <div className="skills">
            <h3>Habilidades</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <p>Coloque aqui informações sobre sua formação acadêmica.</p>
        </div>
      </section>
      <section id="projetos">
        <div className="section-content">
          <h2>Projetos</h2>
          <div className="project-container">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Ver projeto</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <footer>
        <p>© {new Date().getFullYear()} Klinger Hudson Ribeiro</p>
      </footer>
    </div>
  );
}

export default App;
