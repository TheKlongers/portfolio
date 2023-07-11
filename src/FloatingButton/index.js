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
        <a href="https://api.whatsapp.com/send?phone=+5571991416585" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:klingerribeiro@outlook.com">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/klinger-hudson-b5374a141/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
