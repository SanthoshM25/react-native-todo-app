// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState } from "react";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    let taskListCopy = [...taskList];
    taskListCopy.splice(index, 1);
    setTaskList(taskListCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksScreenContainer}>
        <Text style={styles.taskHeading}>Today's Tasks</Text>
        <View style={styles.tasksContainer}>
          {taskList.map((task, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                <Task task={task} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter your tasks here!"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addBtnWrapper}>
            <Text style={styles.addBtnText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksScreenContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  taskHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tasksContainer: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addBtnWrapper: {
    width: 60,
    height: 60,
    marginLeft: 5,
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  addBtnText: {},
});
