import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.taskItem}>
      <View style={styles.taskItemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.taskText}>{props.task}</Text>
      </View>
      <View style={styles.checkBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  taskItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  taskText: {
    maxWidth: "80%",
  },
  checkBox: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Task;
