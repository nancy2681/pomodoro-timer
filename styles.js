import React, { Dimensions } from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGraadient: { height: windowHeight * 1.25 },
  mainView: {
    flex: 1,
  },
  header: {
    alignSelf: "center",
    marginTop: windowHeight * 0.1,
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 5,
    color: "#242B2E",
  },
  btn1: {
    alignSelf: "center",
    marginTop: windowHeight * 0.07,
    borderWidth: 2,
    width: windowWidth * 0.4,
    backgroundColor: "#B9345A",
    borderRadius: 10,
  },

  btnTxt1: { fontSize: 20 },
  view1: {
    flex: 0.1,
    marginTop: windowHeight * 0.1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  txt1: { fontSize: 35 },
  txt2: {
    fontSize: 28,
    alignSelf: "center",
    fontWeight: "bold",
    color: this.state.name == "break time" ? "#E03B8B" : "#8D3DAF",
    marginTop: windowHeight * 0.07,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: windowHeight * 0.07,
  },
  btn2: {
    marginTop: windowHeight * 0.07,
    borderWidth: 2,
    backgroundColor: "#B9345A",
    height: windowHeight * 0.062,
    borderRadius: 10,
  },
  btn3: {
    alignSelf: "center",
    marginTop: windowHeight * 0.07,
    borderWidth: 2,
    backgroundColor: "#B9345A",
    borderRadius: 10,
    height: windowHeight * 0.062,
  },
  btn4: {
    alignSelf: "center",
    marginTop: windowHeight * 0.08,
    borderWidth: 2,
    backgroundColor: "#B9345A",
    height: windowHeight * 0.062,
    borderRadius: 10,
    width: windowWidth * 0.4,
  },
});
export default styles;
