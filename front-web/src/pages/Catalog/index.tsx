import React from 'react';
import MovieCard from './components/MovieCard';
import './styles.scss';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="catalog-movies">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default Catalog;