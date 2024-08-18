import { View, Text } from "react-native";
import { RegisterStyles as styles } from "./Auth.styles";
import { AuthComponentProps } from "./Interfaces";
import Input from "../Shared/Input/Input";
import { globalStyles } from "../globalStyles/styles";

export default function Register({ setIsRegistered }: AuthComponentProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={globalStyles.title}>Register</Text>
        <Input />
      </View>
      <View>
        <Text>Ya tienes cuenta?</Text>
        <Text onPress={() => setIsRegistered(false)}>Ingresar</Text>
      </View>
    </View>
  );
}
