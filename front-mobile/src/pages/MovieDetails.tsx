import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { makePrivateRequest } from "../services";
import { theme } from "../styles";
import { Movie } from "../types/Movie";

const MovieDetails: React.FC = ({
  route: {
    params: { movieId },
  },
}) => {
  const [currentUser, setCurrentUser] = useState(0);
  const [movie, setMovie] = useState<Movie>();

  async function getMovie() {
    const response = await makePrivateRequest({ url: `/movies/${movieId}` });
    setMovie(response.data);
  }

  useEffect(() => {
    getMovie();
  }, [movie?.reviews]);

  return (
    <View style={theme.container}>
      <Text>{`Tela de detalhes do filme ${movie?.title} (tela temporária)`}</Text>
    </View>
  );
};

export default MovieDetails;
