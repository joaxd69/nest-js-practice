import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const InputStyles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    right: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.greyBackground,
    backgroundColor: Colors.light.greyBackground,
  },
  focus: {
    backgroundColor: Colors.light.background,
    borderColor: Colors.primary,
  },
});
