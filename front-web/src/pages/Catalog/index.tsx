import Pagination from 'core/components/Pagination';
import { MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import './styles.scss';

const Catalog = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 4
    }
    makePrivateRequest({ url: '/movies', params })
      .then(response => setMoviesResponse(response.data));
  }, [activePage]);

  return (
    <div className="catalog-container">
      <div className="catalog-movies">
        {
          moviesResponse?.content.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))
        }
      </div>
      {moviesResponse && (
        <Pagination
          totalPages={moviesResponse.totalPages}
          onChange={page => setActivePage(page)}
        />
      )}
    </div>
  )
}

export default Catalog;