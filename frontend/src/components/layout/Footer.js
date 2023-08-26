import React from 'react';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className='titulo-footer'>Huellas Felices 2023</div>
      <div className='subtitulo-footer'>Todos los derechos reservados®️</div>
      <div className="social-icons">
        <a href="https://www.instagram.com/tu_usuario_de_instagram" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/tu_usuario_de_twitter" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
