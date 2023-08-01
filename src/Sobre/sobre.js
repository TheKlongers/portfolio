import React from 'react';
import '../App.css';
import capa from '../img/bg-pattern-card.svg';
import foto from '../img/1620946670858.jpg';

function App() {
  return (
    
    <div>

      <div className='Capa'>
        <section id="sobre">
                <div className="">
                    <div className='box'>
                    <img src={capa} className='capa'/>
                    <img src={foto} className='foto'/>
                    <h3>Klinger Hudson Ribeiro <span>, 23</span></h3>
                    <p>Salvador - BA</p>
                    <p>"Desenvolvedor web. 
                        Tenho cerca de 2 anos de experiência na área e estou em busca 
                        de uma oportunidade como desenvolvedor web júnior. 
                        Sou pró-ativo, colaborativo e estou sempre disposto a 
                        aprender e me adaptar a novas tecnologias. Estou animado 
                        para fazer parte de uma equipe dinâmica e contribuir com 
                        soluções web."</p>
                 </div>
                </div>
        </section>       
      </div>
    </div>
  );
}

export default App;