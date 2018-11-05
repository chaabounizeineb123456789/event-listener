import React, { Component } from 'react';
import './basic.css';
import Box from './components/basic'
import logo from './wolf.jpg';
import tunis from './tunis.jpg';
import sfax from './sfax.jpg';
import sousse from './Sousse.JPG';

class basic extends Component {
         

  render() {
    return (
    	<div className="demo">
    	<Box name="tunis" image={tunis} p="Tunis est l'immense capitale de la Tunisie" />
    	<Box name="sousse " image={sousse} p="Sousse est une ville portuaire de l'est de la Tunisie"/>
    	<Box name="sfax " image={sfax} p="Sfax, deuxième ville et centre économique de Tunisie" />
       
    	<div className="menu">
    	<img id="img" />
    	<h1 id="content"></h1>
    	<p id="p"></p>
        </div>
    	</div>


    )
  }
}

export default basic;
