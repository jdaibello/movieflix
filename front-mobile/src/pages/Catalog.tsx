import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { SelectGenre } from "../components";
import { makePrivateRequest } from "../services";
import { theme } from "../styles";
import { Genre, Movie } from "../types/Movie";

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<Genre>();

  async function getMovies() {
    const params = {
      genreId: genre?.id,
    };

    const response = await makePrivateRequest({ url: "/movies", params });
    const { content } = response.data;

    setMovies(content);
  }

  function handleChangeGenre(genre: Genre) {
    setGenre(genre);
  }

  useEffect(() => {
    getMovies();
  }, [genre?.id]);

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <SelectGenre genre={genre} handleChangeGenre={handleChangeGenre} />
      {loading ? <ActivityIndicator size="large" /> : console.log(movies)}
    </ScrollView>
  );
};

export default Catalog;
