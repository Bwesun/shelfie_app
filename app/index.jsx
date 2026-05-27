import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Logo from "../assets/images/censono-logo.png";
import { Link } from "expo-router";

// Themed imports
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedCard from "../components/ThemedCard";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedLogo />
        <ThemedText title={true}>Welcome to Shelfie</ThemedText>

        <Spacer height={20} />
        <ThemedText style={styles.title}>Modern inventory, smarter shelves.</ThemedText>

      <ThemedText>
        Start with a welcoming dashboard and immediate next steps.
      </ThemedText>

      <View>
        <Link href={"/login"} style={styles.link}>
          <ThemedText>Login</ThemedText>
        </Link>
        <Link href={"/register"} style={styles.link}>
          <ThemedText>Register</ThemedText>
        </Link>
        <Link href={"/profile"} style={styles.link}>
          <ThemedText>Profile</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "semibold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
});
