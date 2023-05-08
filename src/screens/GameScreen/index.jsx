import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import styles from "./styles";

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>The opponent's assumption is</Text>
      <Text style={styles.enemyNumber}>{currentGuess}</Text>
      <Card otherStyles={styles.buttonContainer}>
        <Button title="Lower" onPress={() => console.log("Lower")} />
        <Button title="Higher" onPress={() => console.log("Higher")} />
      </Card>
    </View>
  );
};

export default GameScreen;