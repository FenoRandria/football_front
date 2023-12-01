import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';


import './accueil.css';

const Accueil: React.FC = () => {

  return (
    <main>
        <div className="accueil">
            <div className="accueil-sary">
                <img src="assets/img/" alt=""/>
            </div>
            <div className="accueil-titre">
                <h1>Dream more in foot Ball</h1>
            </div>
            <div className="accueil-btn">
                <Link to="/home" className="Btn-1" >GET TRAINED</Link>
                <Link to="/home" className="Btn-2" >RUN</Link>
            </div>
        </div>
    </main>
  );
};

export default Accueil;
