import { Movie } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => setMovie(response.data));
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <div className="card-base border-radius-20 movie-details">
        <div className="row">
          <div className="col-6">
            <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
          </div>
          <div className="col-6">
            <h1 className="movie-details-title">
              {movie?.subTitle === null ? `${movie?.title}` : `${movie?.title}: ${movie?.subTitle}`}
            </h1>
            <h4 className="movie-details-year">
              {movie?.year}
            </h4>
            <p className="movie-details-card movie-details-synopsis">
              {movie?.synopsis}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;