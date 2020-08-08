import React, { useState } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

const Favorites: React.FC = () => {
  const [favorites, setfavorites] = useState([]);

  async function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (!response) return;
      const favoritedTeachers = JSON.parse(response);

      setfavorites(favoritedTeachers);
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
