import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import LandingImage from "../../assets/images/landing.png";
import StudyIcon from "../../assets/images/icons/study.png";
import GiveClassIcons from "../../assets/images/icons/give-classes.png";
import HeartIcon from "../../assets/images/icons/heart.png";

import styles from "./styles";

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigateToStudyPages() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={LandingImage} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem vindo, {"\n"}{" "}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPages}
        >
          <Image source={StudyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={GiveClassIcons} />

          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 222 conexões já realizadas! {"  "}
        <Image source={HeartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
