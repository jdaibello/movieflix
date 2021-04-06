import React from 'react';
import { ReactComponent as MovieImage } from 'core/assets/images/movie.svg';
import './styles.scss';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <div className="card-base border-radius-20 movie-details">
        <div className="row">
          <div className="col-6">
            <MovieImage className="movie-details-image" />
          </div>
          <div className="col-6">
            <h1 className="movie-details-title">
              O Retorno do Rei
            </h1>
            <h4 className="movie-details-year">
              2013
            </h4>
            <p className="movie-details-card movie-details-synopsis">
              O confronto final entre as forças do bem e do mal que lutam pelo 
              controle do futuro da Terra Média se aproxima. Sauron planeja um 
              grande ataque a Minas Tirith, capital de Gondor, o que faz com que 
              Gandalf e Pippin partam para o local na intenção de ajudar a 
              resistência. Um exército é reunido por Theoden em Rohan, em mais 
              uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, 
              Sam e Gollum seguem sua viagem rumo à Montanha da Perdição 
              para destruir o anel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;