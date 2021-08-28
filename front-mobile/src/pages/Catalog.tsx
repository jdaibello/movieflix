import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { SearchInput } from "../components";
import { makePrivateRequest } from "../services";
import { theme } from "../styles";

const Catalog: React.FC = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMovies() {
    const params = {
      title: search,
    };

    const response = await makePrivateRequest({ url: "/movies", params });
    const { content } = response.data;

    setMovies(content);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const data =
    search.length > 0
      ? movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
      : movies;

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <SearchInput
        placeholder="Título do filme"
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        data.map((movie) => console.log(movie))
      )}
    </ScrollView>
  );
};

export default Catalog;
