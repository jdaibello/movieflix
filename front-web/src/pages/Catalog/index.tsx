import React, { useCallback, useEffect, useState } from 'react';
import Pagination from 'core/components/Pagination';
import { MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieFilter, { FilterForm } from './components/MovieFilter';
import './styles.scss';

const Catalog = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);

  const getMovies = useCallback((filter?: FilterForm) => {
    const params = {
      page: activePage,
      linesPerPage: 4,
      genreId: filter?.genreId
    }
    makePrivateRequest({ url: '/movies', params })
      .then(response => setMoviesResponse(response.data));
  }, [activePage]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="catalog-container">
      <MovieFilter onSearch={filter => getMovies(filter)} />
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