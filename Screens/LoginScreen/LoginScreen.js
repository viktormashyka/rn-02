import { useState } from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Button,
} from "react-native";
import * as Font from "expo-font";
import { classic } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const initialState = { email: "", password: "" };

export const LoginScreen = () => {
  const [state, setState] = useState(initialState);

  const onLogin = () => {
    console.log(`Credentails:
      email: ${state.email}, password: ${state.password}`);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            value={state.email}
            placeholder="Адреса електронної пошти"
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
          <TextInput
            value={state.password}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
          />
          <Button title={"Увійти"} style={styles.button} onPress={onLogin} />
          <Text style={styles.text}>Немає акаунта? Зареєструватись</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: "66%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    // fontWeight: 500,
  },
  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    // fontFamily: "Roboto",
    fontSize: 16,
    // fontWeight: 400,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#BDBDBD",
  },

  button: {
    height: 50,
    // fontFamily: "Roboto",
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 43,
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  text: {
    marginTop: 16,
    // fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#1B4371",
    textAlign: "center",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
});
