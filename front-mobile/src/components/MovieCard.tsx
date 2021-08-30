import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { text, theme } from "../styles";
import { Movie } from "../types/Movie";

interface MovieInfo {
  movieId: number;
  movie: Movie;
}

const MovieCard: React.FC<MovieInfo> = ({ movie, movieId }: MovieInfo) => {
  const navigation = useNavigation();

  function handleDetails(movieId: number) {
    navigation.navigate("MovieDetails", { movieId });
  }

  return (
    <TouchableOpacity
      style={theme.movieCard}
      onPress={() => handleDetails(movieId)}
    >
      <Image source={{ uri: movie.imgUrl }} style={theme.movieImg} />
      <View style={theme.movieInfo}>
        <Text style={text.movieTitle}>
          {movie.subTitle === null
            ? `${movie.title}`
            : `${movie.title}: ${movie.subTitle}`}
        </Text>
        <Text style={text.movieYear}>{movie.year}</Text>
        <Text style={text.movieDescription} numberOfLines={1}>
          {movie.synopsis}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
