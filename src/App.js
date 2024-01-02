import React from 'react';
import './App.css';

class MonComposant extends React.Component {
  monBouton = () =>{
    alert("Le bouton à été cliquer");
  }

  render() {
    return (
      <div className='content'>
        <h1>Mon Premier Composant React</h1>
        <p className="mon-style">Bienvenue sur React App!</p>
        <button onClick={this.monBouton}>Cliquez ici</button>
      </div>
    );
  }
}

export default MonComposant;
