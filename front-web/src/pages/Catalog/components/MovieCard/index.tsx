import React from 'react';
import './styles.scss';
import { Movie } from 'core/types/Movie';

type Props = {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="card-base border-radius-10 movie-card">
      <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
      <div className="movie-info">
        <h5 className="movie-name">
          {movie.subTitle === null ? `${movie.title}` : `${movie.title}: ${movie.subTitle}`}
        </h5>
        <h6 className="movie-year">
          {movie.year}
        </h6>
      </div>
    </div>
  )
}

export default MovieCard;