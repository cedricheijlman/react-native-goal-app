import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const TextInputBox = ({ setInputValue }) => {
  return (
    <TextInput
      onChangeText={(newText) => {
        setInputValue(newText);
      }}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 10,

    borderRadius: 5,
    height: 50,
  },
});

export default TextInputBox;
