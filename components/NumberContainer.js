import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 15,
    borderRadius: 3,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.primary,
    fontSize: 20,
    fontFamily: "open-sans",
  },
});

export default NumberContainer;
