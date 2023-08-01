import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import '../ContactButtons/ContactButtons.css';

const FloatingContactButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div className={`floating-contact-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
      <div className="button-icon">
        <FaEnvelope />
      </div>
      <div className={`contact-options ${isToggled ? 'visible' : ''}`}>
        <a href="mailto:klingerribeiro@outlook.com">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/klinger-hudson-b5374a141/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/TheKlongers" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default FloatingContactButton;
