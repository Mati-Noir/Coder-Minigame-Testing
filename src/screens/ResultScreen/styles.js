import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    imageContainer: {
        maxWidth: "115%",
        height: "70%"
    }
});

export default styles;