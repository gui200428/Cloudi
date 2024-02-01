import React from 'react';
import Border from './border';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import './style/files.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

function Files() {
  return (
    <>
    <Border />
    <div className='file'>
     <div className="file1">
      <FontAwesomeIcon id="icon" icon={faFileImport} />
      <a href=""><h1 >Select File</h1></a>
      </div>
      <div className="file1">
      <FontAwesomeIcon id="icon" icon={faClipboard} />
      <a href=""><h1 className='files'>Upload from clipboard</h1></a>
      </div>
      <div className="file1">
      <FontAwesomeIcon id="icon" icon={faClockRotateLeft} />
      <a href=""><h1 className='files'>Recent uploads</h1></a>
      </div>
    </div>
    </>
  );
}

export default Files;