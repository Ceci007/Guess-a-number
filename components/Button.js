import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Button = (props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{ ...styles.button, ...props.style }}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 36,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  text: {
    color: "white",
    fontFamily: "open-sans",
  },
});

export default Button;
