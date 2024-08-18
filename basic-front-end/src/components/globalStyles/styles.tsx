import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "100%",
    backgroundColor: Colors.light.greyBackground,
  },
});
