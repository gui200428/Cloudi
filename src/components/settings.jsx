import React from 'react';
import Border from './border';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/settings.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

function Settings() {
  return (
    <>
      <Border />
      <div className="settings">
        <div className='settingsText'>
          <a href=""><h1 >Settings</h1></a>
        </div>
        <div className='settingsText'>
          <a href=""><h1>Quit</h1></a>
        </div>
      </div>
    </>
  );
}

export default Settings;