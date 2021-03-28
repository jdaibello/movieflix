import React from 'react';
import { ReactComponent as MovieImage } from 'core/assets/images/movie.svg';
import './styles.scss';

const MovieCard = () => {
  return (
    <div className="card-base border-radius-10 movie-card">
      <MovieImage />
      <div className="movie-info">
        <h5 className="movie-name">
          O Retorno do Rei
        </h5>
        <h6 className="movie-year">
          2013
        </h6>
      </div>
    </div>
  )
}

export default MovieCard;