import React from "react";
import { Image, Text, View } from "react-native";
import star from "../assets/star.png";
import { theme, text } from "../styles";
import { Review } from "../types/Movie";

type ReviewInfo = {
  review: Review;
};

const Reviews: React.FC<ReviewInfo> = ({ review }: ReviewInfo) => {
  return (
    <>
      <View style={theme.reviewUserContainer}>
        <Image source={star} />
        <Text style={text.reviewUserName}>{review.userName}</Text>
      </View>
      <View style={theme.reviewContainer}>
        <Text style={text.reviewText}>{review.text}</Text>
      </View>
    </>
  );
};

export default Reviews;
