import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Alert } from "react-native-web";

import GoalItem from "./components/GoalItem";
import TextInputBox from "./components/TextInputBox";

export default function App() {
  const [goalItems, setGoalItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // handle confirm add goal
  const handleAddGoal = () => {
    if (inputValue == "" || inputValue == null) {
      alert("Add a goal!");
    }

    if (inputValue !== "") {
      setModalVisible(false);
      setInputValue("");
      setGoalItems((item) => [
        ...item,
        { id: Math.random() * 92149124910, name: inputValue },
      ]);
    }
  };

  // handle cancel add goal
  const handleCancel = () => {
    setModalVisible(false);
    setInputValue("");
  };

  // handle open modal
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible}>
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.modalText}>Add Goal</Text>
          <TextInputBox setInputValue={setInputValue} />
          <View style={modalStyles.buttonContainer}>
            <TouchableOpacity
              style={modalStyles.buttons}
              onPress={handleCancel}
            >
              <Text style={modalStyles.textButtons}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyles.buttons}
              onPress={handleAddGoal}
            >
              <Text style={modalStyles.textButtons}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={handleOpenModal} style={styles.addGoalButton}>
        <Text style={styles.addGoalButtonText}>Add Goal</Text>
      </TouchableOpacity>
      <ScrollView style={styles.allGoals}>
        {goalItems.map((item, i) => {
          return (
            <GoalItem
              setGoalItems={setGoalItems}
              allGoals={goalItems}
              itemId={item.id}
              item={item.name}
              key={item.id}
            />
          );
        })}
        {goalItems.length == 0 && (
          <Text style={styles.noGoalsText}>No goals</Text>
        )}
      </ScrollView>
    </View>
  );
}

const modalStyles = StyleSheet.create({
  buttons: {
    borderColor: "grey",
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    marginVertical: 30,
  },

  textButtons: {
    fontSize: 20,
  },

  modalContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    fontFamily: "Sinhala Sangam MN",
  },

  modalText: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "Sinhala Sangam MN",
  },
});

const styles = StyleSheet.create({
  addGoalButton: {
    flexDirection: "row",
    paddingVertical: 10,

    borderRadius: 7,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    justifyContent: "center",
  },

  addGoalButtonText: {
    color: "black",
    fontSize: 30,
  },

  allGoals: {
    marginVertical: 30,
  },

  noGoalsText: {
    textAlign: "center",
  },

  container: {
    padding: 50,
  },
});
