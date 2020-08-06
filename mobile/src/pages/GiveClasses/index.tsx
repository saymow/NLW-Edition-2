import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import GiveClassesBackground from "../../assets/images/give-classes-background.png";

import styles from "./styles";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigationBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={GiveClassesBackground}
        style={styles.content}
      >
        <Text style={styles.title}>Que ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor em nossa
          plataforma web!
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigationBack}>
        <Text style={styles.okButtonText}>Tudo bem!</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
