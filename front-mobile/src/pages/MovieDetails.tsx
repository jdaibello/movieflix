import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { ReviewForm, Reviews } from "../components";
import { makePrivateRequest } from "../services";
import { text, theme } from "../styles";
import { Movie } from "../types/Movie";

const MovieDetails: React.FC = ({
  route: {
    params: { movieId },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  async function getMovie() {
    const response = await makePrivateRequest({ url: `/movies/${movieId}` });
    setMovie(response.data);
  }

  useEffect(() => {
    setLoading(true);
    getMovie();
    setLoading(false);
  }, [movie?.reviews]);

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
          <ReviewForm movieId={movie?.id} />
          <View style={theme.reviewsContainer}>
            {movie?.reviews.length > 0 ? (
              <ScrollView>
                {movie?.reviews.map((review) => (
                  <Reviews key={review.id} review={review} />
                ))}
              </ScrollView>
            ) : (
              <View style={theme.noReviewsContainer}>
                <Text style={text.primaryTextWhite}>Sem avaliações</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default MovieDetails;
