import { StyleSheet, View } from "react-native";

import GameScreen from "./src/screens/GameScreen";
import Header from "./src/components/Header";
import StartGame from "./src/screens/StartGame";
import { useFonts } from "expo-font";
import { useState } from "react";
import ResultScreen from "./src/screens/ResultScreen";

export default function App() {
  const [loaded] = useFonts({
    "InstrumentSerif-Regular": require("./src/assets/fonts/InstrumentSerif-Regular.ttf"),
  });

  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("")

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleGameResult =  (selection, number) => {
    if(
      (selection === "lower" && userNumber < number) ||
      (selection === "higher" && userNumber > number)
      ) {
        setResult("win");
      } else {
        setResult("lose");
        }
        setWinOrLose(true);
      };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true ) {
    content = <ResultScreen result={result} />;
  } else if (userNumber) {
    content = <GameScreen handleResult={handleGameResult} />;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Guess the random number?"} newStyles={styles.headerTitle} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: "white",
    fontSize: 26,
    fontFamily: "InstrumentSerif-Regular",
  },
});