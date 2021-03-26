import React from 'react';
import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg';
import './styles.scss';
import Login from './components/Login';

const Home = () => (
  <div className="home-container">
    <div className="home-info">
      <h1 className="home-info-title">
        Avalie Filmes
      </h1>
      <p className="home-info-subtitle">
        Diga o que você achou do seu filme favorito
      </p>
      <AuthImage />
    </div>
    <div className="auth-content">
      <Login />
    </div>
  </div>
);

export default Home;