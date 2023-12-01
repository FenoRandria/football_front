import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StatGenerale from '../components/StatGenerale';
import  StatAttaque from '../components/StatAttaque';
import  StatDefense from '../components/StatDefense';

import './Style.css';

const Home: React.FC = () => {
  const [activeLink, setActiveLink] = useState('general');
  const [activeLinkSous, setActiveLinkSous] = useState('general');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleLinkClickSous = (link: string) => {
    setActiveLinkSous(link);
  };
  return (
    <Router>
      <main>
        <div className="home">
          <header className="header">
            <nav>
              <Link to="/general" className={activeLink === 'general' ? 'actif' : ''} onClick={() => handleLinkClick('general')}>General</Link>
              <Link to="/domicile" className={activeLink === 'domicile' ? 'actif' : ''} onClick={() => handleLinkClick('domicile')}>Domicile</Link>
              <Link to="/exterieur" className={activeLink === 'exterieur' ? 'actif' : ''} onClick={() => handleLinkClick('exterieur')}>Exterieur</Link>
            </nav>
          </header>

          <div className="mini-nav">
            <nav className="navdiv">
              <Link to="/general" className={activeLinkSous === 'general' ? 'actif' : ''} onClick={() => handleLinkClickSous('general')}>General</Link>
              <Link to="/defense" className={activeLinkSous === 'defense' ? 'actif' : ''} onClick={() => handleLinkClickSous('defense')}>Defense</Link>
              <Link to="/attaque" className={activeLinkSous === 'attaque' ? 'actif' : ''} onClick={() => handleLinkClickSous('attaque')}>Attaque</Link>
            </nav>
          </div>

          {/* Définissez les routes pour chaque composant */}
          <Route path="/general" exact component={StatGenerale} />
          <Route path="/defense" component={StatDefense} />
          <Route path="/attaque" component={StatAttaque} />
        </div>
      </main>
    </Router>
  );
};

export default Home;
