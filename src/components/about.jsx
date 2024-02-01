import React from 'react';
import Border from './border';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/about.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

function About() {
  return (
    <>
      <Border />
      <div className="About">
        <div className='aboutText'>
          <a href=""><h1 >About Rabbithole...</h1></a>
        </div>
        <div className='aboutText'>
          <a href=""><h1>Check for updates</h1></a>
        </div>
      </div>
    </>
  );
}

export default About;