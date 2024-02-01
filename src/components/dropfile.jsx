import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import './style/dropfile.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

function Dropfile() {
  return (
    <>
    <a href=""><div className="dropfile">
    <FontAwesomeIcon id="icon" icon={faUpload} />
      <h1>Drag files here...</h1>
    </div>
    </a>
    </>
  );
}

export default Dropfile;