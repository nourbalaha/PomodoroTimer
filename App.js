import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

function Button({ text, color, background }) {
  return (
    <View style={[styles.button, { backgroundColor: background }]}>
      <Text style={{ color }}>{text}</Text>
    </View>
  );
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Pomodoro</Text>
        <Text style={styles.counter}>25:00</Text>
        <View style={styles.buttonContainer}>
        <Button text="Start" color="white" background="green"/>
        <Button text="Stop" color="white" background="red"/>
        <Button text="Reset" color="white" background="grey"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222"
  },
  buttonContainer: {
    flexDirection: "row",
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    color: "#ddd"
  },
  counter: {
    fontSize: 80,
    textAlign: "center",
    margin: 10,
    color: "#ddd"
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonTitle: {
    color: "white"
  },
});
