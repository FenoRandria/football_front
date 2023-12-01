import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StatGenerale from '../components/StatGenerale';
import  StatAttaque from '../components/StatAttaque';
import  StatDefense from '../components/StatDefense';
import './Style.css';

const Home: React.FC = () => {
  return (
    <Router>
      <main>
        <div className="home">
          <header className="header">
            <nav>
              <Link to="/" className="actif">General</Link>
              <Link to="/domicile">Domicile</Link>
              <Link to="/exterieur">Exterieur</Link>
            </nav>
          </header>
          <div className="mini-nav">
            <nav className="navdiv">
              <Link to="/" className="actif">General</Link>
              <Link to="/defense">Defense</Link>
              <Link to="/attaque">Attaque</Link>
            </nav>
          </div>

          {/* Définissez les routes pour chaque composant */}
          <Route path="/" exact component={StatGenerale} />
          <Route path="/defense" component={StatDefense} />
          <Route path="/attaque" component={StatAttaque} />
        </div>
      </main>
    </Router>
  );
};

export default Home;
