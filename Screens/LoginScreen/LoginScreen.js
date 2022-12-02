import { useState } from "react";
import {
  Alert,
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

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentails:", `email: ${email}, password: ${password}`);
    console.log(`Credentails:
      name: email: ${email}, password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            value={email}
            onChange={emailHandler}
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChange={passwordHandler}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
          />
          <Button title={"Увійти"} style={styles.button} onPress={onLogin} />
          <Text style={styles.text}>Немає акаунта? Зареєструватись</Text>
          {/* <StatusBar style="auto" /> */}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "fixed",
    flex: 1,
    width: "100%",
    marginTop: "66%",
    // marginHorizontal: 0,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    // alignItems: "center",
    // justifyContent: "center",

    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 50,

    background: "#F6F6F6",
    /* Gray/02 */

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",

    borderRadius: 8,

    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,

    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",

    color: "#BDBDBD",
  },
  button: {
    height: 50,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 43,
    // paddingVertical: 8,
    // padding: 16 32,
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
    backgroundColor: "#FF6C00",

    // fontSize: 30,
    // fontWeight: "bold",
  },
  text: {
    marginTop: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#1B4371",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
});
