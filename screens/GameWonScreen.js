import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import NumberContainer from "./../components/NumberContainer";

const GameWonScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Card style={styles.cardContainer}>
          <Text style={styles.title}>You Won!!</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("../assets/original.png")}
            />
          </View>
          <Text style={styles.text}>
            Number of attempts: {props.roundsNumber}
          </Text>
          <Text style={styles.text}>Number was:</Text>
          <NumberContainer>{props.userNumber}</NumberContainer>
          <Button style={styles.roundedButton} onPress={props.onRestart}>
            NEW GAME
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Dimensions.get("window").height > 600 ? 15 : 5,
    width: "95%",
    maxWidth: "95%",
    minWidth: 300,
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    borderRadius: (Dimensions.get("window").width * 0.6) / 2,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  roundedButton: {
    borderRadius: 25,
  },
});

export default GameWonScreen;
