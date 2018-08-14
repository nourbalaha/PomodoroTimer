import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import momentTimer from "moment-timer";

function Button({ text, color, background }) {
  return (
    <View style={[styles.button, { backgroundColor: background }]}>
      <Text style={{ color }}>{text}</Text>
    </View>
  );
}

function Timer({ interval }) {
  const duration = moment.duration(interval).format();
  return <Text style={styles.timer}>{duration}</Text>;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: { seconds: 0, minutes: 25 },
    };
  }

  start = () => {
    const timer = moment.duration(1, "seconds").timer({loop: true}, function() {
      if(this.state.session.seconds<=0){
        this.state.session.minutes
      }else{

      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pomodoro</Text>
        <Timer interval={this.state.session} />
        <View style={styles.buttonContainer}>
          <Button text="Start" color="white" background="green" />
          <Button text="Stop" color="white" background="red" />
          <Button text="Reset" color="white" background="grey" />
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
    flexDirection: "row"
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    color: "#ddd"
  },
  timer: {
    fontSize: 80,
    textAlign: "center",
    margin: 10,
    color: "white"
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  buttonTitle: {
    color: "white"
  }
});
