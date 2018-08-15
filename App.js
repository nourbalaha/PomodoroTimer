import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import PercentageCircle from "react-native-percentage-circle";

function RoundButton({ text, background, cb }) {
  return (
    <TouchableHighlight onPress={cb}>
      <View style={[styles.button, { backgroundColor: background }]}>
        <Text style={styles.buttonTitle}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMode: "Pomodoro",
      full: moment.duration({ seconds: 0, minutes: 25 }),
      timer: moment.duration({ seconds: 0, minutes: 25 }),
      isWorking: false,
      interval: undefined
    };
  }

  start = () => {
    if (!this.state.isWorking) {
      this.state.interval = setInterval(() => {
        this.setState({
          timer: this.state.timer.subtract(1, "seconds"),
          isWorking: true
        });
      }, 1000);
    }
  };

  stop = () => {
    if (this.state.isWorking) {
      this.setState({ isWorking: false });
      clearInterval(this.state.interval);
    }
  };

  reset = () => {
    clearInterval(this.state.interval);
    this.setState({
      currentMode: "Pomodoro",
      full: moment.duration({ seconds: 0, minutes: 25 }),
      timer: moment.duration({ seconds: 0, minutes: 25 }),
      isWorking: false
    });
  };

  switchMode = () => {
    if (this.state.currentMode === "Pomodoro") {
      this.setState({
        currentMode: "Break",
        full: moment.duration({ seconds: 0, minutes: 5 }),
        timer: moment.duration({ seconds: 0, minutes: 5 })
      });
    } else {
      this.setState({
        currentMode: "Pomodoro",
        full: moment.duration({ seconds: 0, minutes: 25 }),
        timer: moment.duration({ seconds: 0, minutes: 25 })
      });
    }
  };

  render() {
    let percentage = (this.state.timer * 100) / this.state.full;
    if (this.state.timer == 0) {
      this.switchMode();
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.currentMode}</Text>
        <TouchableHighlight onPress={this.switchMode}>
          <PercentageCircle
            borderWidth={12}
            radius={150}
            percent={percentage}
            color={
              this.state.currentMode === "Pomodoro" ? "#00985F" : "#F60000"
            }
            innerColor="#3A3A3C"
          >
            <Text style={styles.timer}>{this.state.timer.format()}</Text>
          </PercentageCircle>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <RoundButton
            cb={this.start}
            text="Start"
            color="white"
            background="#00985F"
          />
          <RoundButton
            cb={this.stop}
            text="Stop"
            color="white"
            background="#F60000"
          />
          <RoundButton
            cb={this.reset}
            text="Reset"
            color="white"
            background="grey"
          />
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
    backgroundColor: "#3A3A3C"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    margin: 20,
    color: "#ddd"
  },
  timer: {
    fontSize: 80,
    color: "white"
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  buttonTitle: {
    color: "white",
    fontSize: 22
  }
});
