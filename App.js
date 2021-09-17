import React from "react";
import { Text, View, Vibration, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import styles from "./styless";
const windowHeight = Dimensions.get("window").height;

var abc, hi;
export default class dflt extends React.Component {
  state = { counter: 0, name: "Get started", pause: false };
  press = () => {
    abc = setInterval(() => {
      if (this.state.pause == false)
        this.setState({ counter: this.state.counter + 1 });
    }, 1000);

    setTimeout(() => {
      this.setState({ name: "working time" });
    }, 1000);
    setTimeout(() => {
      this.setState({ name: "break time" });
      hi = setInterval(() => Vibration.vibrate(10000), 1);
    }, 25 * 60 * 1000);
    setTimeout(() => {
      clearInterval(hi);
    }, 25 * 60 * 1000 + 10 * 1000);
  };

  pause = () => {
    this.setState({ pause: true });
  };

  click = () => {
    clearInterval(abc);
    this.setState({ counter: 0 });
  };
  resume = () => {
    this.setState({ pause: false });
  };

  render() {
    return (
      <LinearGradient
        colors={["#FFAFBD", "#ffc3a0"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.LinearGradient}
      >
        <View style={styles.mainView}>
          <View>
            <Text style={styles.header}>POMODORO</Text>
          </View>
          <View>
            <Button mode="contained" style={styles.btn1} onPress={this.press}>
              <Text style={styles.btnTxt1}>Start</Text>
            </Button>
          </View>
          <View style={styles.view1}>
            <Text style={styles.txt1}>
              {Math.floor(this.state.counter / 60)}
            </Text>
            <Text style={styles.txt1}> : {this.state.counter % 60} </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 28,
                alignSelf: "center",
                fontWeight: "bold",
                marginTop: windowHeight * 0.07,
              }}
            >
              {this.state.name}
            </Text>
          </View>
          <View style={styles.view2}>
            <Button
              mode="contained"
              icon="pause"
              style={styles.btn2}
              onPress={this.pause}
            >
              <Text style={styles.btnTxt1}>Pause</Text>
            </Button>
            <Button
              mode="contained"
              icon="play"
              style={styles.btn3}
              onPress={this.resume}
            >
              <Text style={styles.btnTxt1}>Resume</Text>
            </Button>
          </View>
          <View>
            <Button mode="contained" style={styles.btn4} onPress={this.click}>
              <Text style={styles.btnTxt1}>Reset</Text>
            </Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
