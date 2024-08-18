import { TextInput, View } from "react-native";
import { InputStyles as styles } from "./Input.styles";
import { useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props extends React.ComponentProps<typeof TextInput> {
  withContainer?: boolean;
  containerStyles?: object;
  isPassword?: boolean;
  withIcon?: boolean;
}

const BaseInput = ({ isPassword, ...props }: Props) => {
  const [focus, setFocus] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const handlePasswordView = () => {
    setSeePassword(!seePassword);
  };
  return (
    <>
      <TextInput
        style={[styles.input, focus && styles.focus]}
        {...props}
        secureTextEntry={isPassword && !seePassword}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {isPassword && (
        <View style={styles.iconContainer}>
          {seePassword ? (
            <FontAwesome
              name="eye-slash"
              size={15}
              color="black"
              onPress={handlePasswordView}
            />
          ) : (
            <FontAwesome
              name="eye"
              size={15}
              color="black"
              onPress={handlePasswordView}
            />
          )}
        </View>
      )}
    </>
  );
};

export default function Input({
  withContainer,
  containerStyles,
  isPassword,
  ...props
}: Props) {
  return (
    <View style={containerStyles || styles.container}>
      <BaseInput {...props} isPassword={isPassword} />
    </View>
  );
}
