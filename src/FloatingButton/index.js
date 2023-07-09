import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`floating-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="button-icon">
        <FaWhatsapp />
      </div>
      <div className={`button-options ${isHovered ? 'visible' : ''}`}>
        <a href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:SEU_EMAIL">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/SEU_PERFIL_LINKEDIN" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;