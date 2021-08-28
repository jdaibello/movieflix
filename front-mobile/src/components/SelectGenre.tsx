import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import arrowDown from "../assets/arrow-down.png";
import { makePrivateRequest } from "../services";
import { text, theme } from "../styles";
import { Genre } from "../types/Movie";

interface SelectProps {
  genre?: Genre;
  handleChangeGenre: (genre: Genre) => void;
}

const SelectGenre: React.FC<SelectProps> = ({ genre, handleChangeGenre }) => {
  const [genres, setGenres] = useState<Genre[]>();
  const [showGenres, setShowGenres] = useState(false);

  async function getGenres() {
    const response = await makePrivateRequest({ url: "/genres" });
    setGenres([{ id: 0, name: "Todos" }, ...response.data]);
  }

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <View>
      <Modal
        visible={showGenres}
        transparent={true}
        presentationStyle="overFullScreen"
      >
        <View style={theme.modalContainer}>
          <ScrollView contentContainerStyle={theme.modalContent}>
            {genres?.map((genre) => (
              <TouchableOpacity
                style={theme.modalItem}
                key={genre.id}
                onPress={() => {
                  setShowGenres(!showGenres);
                  handleChangeGenre(genre);
                }}
              >
                <Text style={text.modalItemText}>{genre.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
      <View style={theme.selectGenreContainer}>
        <TouchableOpacity
          onPress={() => setShowGenres(!showGenres)}
          style={theme.selectContainer}
          activeOpacity={0.2}
        >
          <Text style={text.selectText}>
            {!genre?.id || genre.id === 0 ? "Todos" : genre?.name}
          </Text>
          <Image source={arrowDown} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectGenre;
