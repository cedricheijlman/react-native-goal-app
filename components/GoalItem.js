import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";

const GoalItem = ({ item, allGoals, itemId, setGoalItems }) => {
  // handle delete goal
  const handleDelete = (itemId) => {
    console.log(itemId);
    setGoalItems((items) => items.filter((item) => item.id !== itemId));
  };

  // delete goal confirmation alert
  const showAlert = () =>
    Alert.alert("Delete Goal", "Are you sure you wanna delete your goal?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          handleDelete(itemId);
        },
        style: "cancel",
      },
    ]);

  return (
    <TouchableOpacity
      onPress={() => {
        showAlert();
      }}
    >
      <Text style={styles.listItem}>{item}</Text>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 6,
    fontSize: 19,
    fontFamily: "Sinhala Sangam MN",
  },
});
