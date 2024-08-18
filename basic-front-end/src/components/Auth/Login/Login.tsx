import { View, Text, Pressable, Alert, Image } from "react-native";
import { LoginStyles as styles } from "../Auth.styles";
import Input from "../../Shared/Input/Input";
import { globalStyles } from "../../globalStyles/styles";
import LoginImage from "@/src/assets/images/loginImg.png";
import { FontAwesome } from "@expo/vector-icons";
interface Props {
  setIsRegistered: (value: boolean) => void;
}

export default function Login({ setIsRegistered }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={LoginImage} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={globalStyles.title}>Ingresar</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <Input placeholder="Email" />
      </View>

      <View style={styles.inputContainer}>
        <Text>Contraseña</Text>
        <Input placeholder="Password" isPassword />
        <Text>Olvidaste tu contraseña?</Text>
      </View>

      <Pressable
        onPressOut={() => Alert.alert("Login")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>

      <View style={styles.socialContainer}>
        <Text>Ingresa con </Text>
        <View style={styles.socialsItems}>
          <FontAwesome
            name="facebook-f"
            size={15}
            style={styles.facebookIcon}
          />
          <FontAwesome name="google" size={15} style={styles.googleIcon} />
        </View>
      </View>
      <View style={globalStyles.separator} />

      <View style={styles.noAccountContainer}>
        <Text>No tienes cuenta?</Text>
        <Text
          onPress={() => {
            setIsRegistered(true);
          }}
          style={styles.noAccountText}
        >
          Crear cuenta
        </Text>
      </View>
    </View>
  );
}
