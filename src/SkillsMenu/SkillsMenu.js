// components/Habilidades.js
import React from 'react';
import './SkillsMenu.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';

const Habilidades = () => {
  return (
    <section id="habilidades" className="habilidades">
      <h2>Habilidades</h2>
      <div className="skills">
        <div className="skill">
          <FaHtml5 />
          <span>HTML</span>
        </div>
        <div className="skill">
          <FaCss3Alt />
          <span>CSS</span>
        </div>
        <div className="skill">
          <FaJs />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact />
          <span>React</span>
        </div>
        <div className="skill">
          <FaGithub />
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
