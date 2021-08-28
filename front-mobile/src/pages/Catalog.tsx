import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator, FlatList } from "react-native";
import { SelectGenre } from "../components";
import MovieCard from "../components/MovieCard";
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

  const data = movies;

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <SelectGenre genre={genre} handleChangeGenre={handleChangeGenre} />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MovieCard key={item.id} movieId={item.id} movie={item} />
          )}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1} // 0.1 --> Quando o usuário chegar a 10% do final da tela
        />
      )}
    </ScrollView>
  );
};

export default Catalog;
