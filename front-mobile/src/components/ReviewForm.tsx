import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { makePrivateRequest } from "../services";
import { userIsMember } from "../services/auth";
import { colors, text, theme } from "../styles";

interface ReviewInfo {
  movieId: number;
}

const ReviewForm: React.FC<ReviewInfo> = ({ movieId }: ReviewInfo) => {
  const [review, setReview] = useState("");
  const [hasPermission, setHasPermission] = useState(false);

  async function checkMember() {
    const user = await userIsMember();
    setHasPermission(user);
  }

  async function saveReview(movieId: number, text: string) {
    let newText = text.trim();
    if (newText.length < 5) {
      Alert.alert("Atenção", "A avaliação deve ter no mínimo 5 caracteres");
    } else {
      try {
        const payload = {
          movieId,
          text: review,
        };
        await makePrivateRequest({
          url: "/reviews",
          method: "POST",
          data: payload,
        });
        setReview("");
        Alert.alert("Sucesso", "Avaliação salva com sucesso");
      } catch (e) {
        Alert.alert("Erro ao salvar avaliação");
      }
    }
  }

  useEffect(() => {
    checkMember();
  }, []);

  return (
    <>
      {hasPermission && (
        <View style={theme.reviewFormContainer}>
          <TextInput
            placeholder={"Deixe sua avaliação aqui"}
            placeholderTextColor={colors.darkGray}
            multiline={true}
            textAlignVertical="top"
            scrollEnabled={true}
            style={theme.reviewInput}
            value={review}
            onChangeText={(text) => setReview(text)}
          />
          <TouchableOpacity
            style={theme.primaryButtonReview}
            activeOpacity={0.8}
            onPress={() => saveReview(movieId, review)}
          >
            <View style={theme.buttonTextContainer}>
              <Text style={text.primaryTextReview}>Salvar Avaliação</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ReviewForm;
