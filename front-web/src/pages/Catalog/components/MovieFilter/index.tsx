import React, { useEffect, useState } from 'react';
import { Genre } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import Select from 'react-select';
import './styles.scss';

export type FilterForm = {
  genreId?: number;
}

type Props = {
  onSearch: (filter: FilterForm) => void;
}

const MovieFilter = ({ onSearch }: Props) => {
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genre, setGenre] = useState<Genre>();

  useEffect(() => {
    setIsLoadingGenres(true);
    makePrivateRequest({ url: '/genres' })
      .then(response => setGenres(response.data))
      .finally(() => setIsLoadingGenres(false))
  }, []);

  const handleChangeGenre = (genre: Genre) => {
    setGenre(genre);
    onSearch({genreId: genre?.id});
  }

  return (
    <div className="card-base movie-filter-container">
      <Select
        name="genres"
        key={`select-${genre?.id}`}
        isLoading={isLoadingGenres}
        isSearchable={false}
        options={genres}
        getOptionLabel={(option: Genre) => option.name}
        getOptionValue={(option: Genre) => String(option.id)}
        className="filter-select-container"
        classNamePrefix="movie-genres-select"
        placeholder={genre?.id === null ? "Gênero" : genre?.name}
        inputId="genres"
        onChange={value => handleChangeGenre(value as Genre)}
      />
    </div>
  );
};

export default MovieFilter;