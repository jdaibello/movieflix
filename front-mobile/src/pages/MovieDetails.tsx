import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { makePrivateRequest } from "../services";
import { userIsMember } from "../services/auth";
import { text, theme } from "../styles";
import { Movie, Review } from "../types/Movie";

const MovieDetails: React.FC = ({
  route: {
    params: { movieId },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  async function getMovie() {
    setLoading(true);
    const response = await makePrivateRequest({ url: `/movies/${movieId}` });
    setMovie(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView contentContainerStyle={theme.container}>
          <ScrollView contentContainerStyle={theme.movieDetailsCard}>
            <Image
              source={{ uri: movie?.imgUrl }}
              style={theme.movieDetailsImg}
            />
            <ScrollView contentContainerStyle={theme.movieInfoContainer}>
              <Text style={text.movieTitle}>
                {movie?.subTitle === null
                  ? `${movie?.title}`
                  : `${movie?.title}: ${movie?.subTitle}`}
              </Text>
              <Text style={text.movieYear}>{movie?.year}</Text>
              <ScrollView
                style={theme.movieSynopsisContainer}
                showsVerticalScrollIndicator={false}
                persistentScrollbar={true}
                nestedScrollEnabled={true}
              >
                <Text style={text.movieSynopsis}>{movie?.synopsis}</Text>
              </ScrollView>
            </ScrollView>
          </ScrollView>
        </ScrollView>
      )}
    </>
  );
};

export default MovieDetails;
