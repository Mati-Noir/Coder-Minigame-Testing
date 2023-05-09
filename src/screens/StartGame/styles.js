import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: colors.primary,
  },
  subtitle: {
    color: colors.black,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  cleanButton: {
    width: "40%",
    minWidth: 100,
    maxWidth: 200,
    backgroundColor: colors.disableColor,
    borderRadius: 10,
  },
  confirmStyle: {
    width: "40%",
    minWidth: 100,
    maxWidth: 200,
    backgroundColor: colors.actionColor,
    borderRadius: 10,
  },
  selectedCard: {
    marginTop: 50,
    width: "70%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
  numberPreview: {
    margin: 10,
    fontSize: 20,
    fontWeight: "700"
  }
});

export default styles;