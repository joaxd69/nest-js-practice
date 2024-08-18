import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

const SharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 40,
    gap: 10,
    backgroundColor: "white",
  },

  titleContainer: {
    alignItems: "center",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
  },
  imageContainer: {
    minHeight: "40%",
    justifyContent: "center",
  },
});

export const LoginStyles = StyleSheet.create({
  ...SharedStyles,
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
    marginTop: 10,
  },
  socialsItems: {
    flexDirection: "row",
    gap: 15,
  },
  googleIcon: {
    color: "white",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 5,
  },
  facebookIcon: {
    color: "white",
    backgroundColor: "#3b5998",
    borderRadius: 5,
    padding: 5,
  },
  noAccountContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  noAccountText: {
    textDecorationLine: "underline",
    color: Colors.primary,
  },
});

export const RegisterStyles = StyleSheet.create({
  ...SharedStyles,
});
