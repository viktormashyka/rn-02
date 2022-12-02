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
import { classic } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const initialState = { name: "", email: "", password: "" };

export const RegistrationScreen = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [state, setState] = useState(initialState);

  // const nameHandler = (text) => setName(text);
  // const emailHandler = (text) => setEmail(text);
  // const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    // Alert.alert(
    //   "Credentails:",
    //   `name: ${name}, email: ${email}, password: ${password}`
    // );
    console.log(`Credentails:
      name: ${state.name}, email: ${state.email}, password: ${state.password}`);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {/* <KeyboardAvoidingView> */}
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            value={state.name}
            // onChange={nameHandler}
            placeholder="Логін"
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, name: value }))
            }
          />
          <TextInput
            value={state.email}
            // onChange={emailHandler}
            placeholder="Адреса електронної пошти"
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
          <TextInput
            value={state.password}
            // onChange={passwordHandler}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
          />
          <Button
            title={"Зареєструватися"}
            style={styles.button}
            onPress={onLogin}
          />
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
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

// import { StatusBar } from "expo-status-bar";
// import {
//   KeyboardAvoidingView,
//   Keyboard,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
//   Alert,
//   Button,
// } from "react-native";
// import React, { useState } from "react";
// import { loadFonts } from "./loadFonts";

// export default function App() {
//   const [value, setValue] = useState("");
//   const inputHandler = (text) => setValue(text);

//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const nameHandler = (text) => setName(text);
//   const passwordHandler = (text) => setPassword(text);
//   const onLogin = () => {
//     Alert.alert("Credentials", `${name} + ${password}`);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <Text style={styles.text}>
//             Open up App.js to start working on your app!
//           </Text>
//           <Text>Hello React native</Text>
//           <TextInput
//             placeholder="Type text"
//             value={value}
//             onChangeText={inputHandler}
//           />
//           <TextInput
//             value={name}
//             onChangeText={nameHandler}
//             placeholder="Username"
//             style={styles.input}
//           />
//           <TextInput
//             value={password}
//             onChangeText={passwordHandler}
//             placeholder="Password"
//             style={styles.input}
//           />
//           <Button title={"Login"} style={styles.input} onPress={onLogin} />
//           <StatusBar style="auto" />
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// // Шлях пишемо щодо компонента, де використовується <Image/>
// // Локальне зображення
// {
//   /* <Image source={require('./logo.png')}/> */
// }

// // Зображення з мережі
// {
//   /* <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
//        style={{width: 700, height: 700}} /> */
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: Platform.OS === "ios" ? 50 : 100,
//     ...Platform.select({
//       ios: { backgroundColor: "#000000" },
//       android: { backgroundColor: "#ffffff" },
//     }),
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingBottom: 30,
//   },
//   text: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 6,
//     backgroundColor: "#61dafb",
//     color: "#20232a",
//     textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//   },
// });
