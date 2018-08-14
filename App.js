import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import momentTimer from "moment-timer";

function RoundButton({ text, background,cb }) {
  return (
    <View style={[styles.button, { backgroundColor: background }]}>
      <Text style={styles.buttonTitle} onPress={cb}>{text}</Text>
    </View>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: moment.duration({ seconds: 0, minutes: 25 }),
      isWorking:false,
      interval:undefined,
    };
  }

  start = () => {
    if(!this.state.isWorking){
      this.state.interval=setInterval(()=>{
        this.setState({timer:this.state.timer.subtract(1,"seconds"),isWorking:true})
      },1000);
    }
  };
  
  stop = () => {
    if(this.state.isWorking){
      this.setState({isWorking:false})
      clearInterval(this.state.interval);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pomodoro</Text>
        <Text style={styles.timer}>{this.state.timer.format()}</Text>
        <View style={styles.buttonContainer}>
          <RoundButton
            cb={this.start}
            text="Start"
            color="white"
            background="green"
          />
          <RoundButton cb={this.stop} text="Stop" color="white" background="red" />
          <RoundButton text="Reset" color="white" background="grey" />
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
    color: "white",
    fontSize: 18
  }
});
