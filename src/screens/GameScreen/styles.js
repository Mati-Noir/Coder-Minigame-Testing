import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
  textColor: {
    color: colors.white,
    fontSize: 20,
  },
  enemyNumber: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default styles;