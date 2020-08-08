import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import { Picker } from "@react-native-community/picker";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setfavorites] = useState<number[]>([]);

  const [isFiltersVisisble, setIsFiltersVisisble] = useState(false);
  const [filters, setFilters] = useState({
    subject: "",
    week_day: 0,
    time: "",
  });

  async function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (!response) return;
      const favoritedTeachers = JSON.parse(response);
      const favoritedTeachersIds = favoritedTeachers.map(
        (teacher: Teacher) => teacher.id
      );

      setfavorites(favoritedTeachersIds);
    });
  }

  const handleToggleFiltersVisible = () =>
    setIsFiltersVisisble(!isFiltersVisisble);

  async function handleFiltersSubtmit() {
    const response = await api.get("classes", {
      params: filters,
    });

    setIsFiltersVisisble(false);
    loadFavorites();
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff"></Feather>
          </BorderlessButton>
        }
      >
        {isFiltersVisisble && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={filters.subject}
              onChangeText={(text) =>
                setFilters({
                  ...filters,
                  subject: text,
                })
              }
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                {/* <TextInput
                  style={styles.input}
                  value={filters.week_day}
                  onChangeText={(text) =>
                    setFilters({
                      ...filters,
                      week_day: text,
                    })
                  }
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                /> */}
                <View
                  style={{
                    borderRadius: 8,
                    marginTop: 4,
                    overflow: "hidden",
                  }}
                >
                  <Picker
                    selectedValue={filters.week_day}
                    onValueChange={(itemValue, label) =>
                      setFilters({
                        ...filters,
                        week_day: Number(itemValue),
                      })
                    }
                    style={styles.select}
                    itemStyle={styles.selectOptionsStyle}
                  >
                    <Picker.Item label="Segunda-feira" value={1} />
                    <Picker.Item label="Terça-feira" value={2} />
                    <Picker.Item label="Quarta-feira" value={3} />
                    <Picker.Item label="Quinta-feira" value={4} />
                    <Picker.Item label="Sexta-feira" value={5} />
                    <Picker.Item label="Sábado" value={6} />
                    <Picker.Item label="Domingo" value={7} />
                  </Picker>
                </View>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={filters.time}
                  onChangeText={(text) =>
                    setFilters({
                      ...filters,
                      time: text,
                    })
                  }
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubtmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {teachers.map((teacher, index) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
