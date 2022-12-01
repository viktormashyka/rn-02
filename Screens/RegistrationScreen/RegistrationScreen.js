import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Button,
} from "react-native";

export default function RegistrationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setPassword(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert(
      "Credentails:",
      `name: ${name}, + email: ${email}, + password: ${password}`
    );
    console.log(`Credentails:
      name: ${name}, + email: ${email}, + password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            value={name}
            onChange={nameHandler}
            placeholder="Логін"
            style={styles.input}
          />
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
          <Button title={"Login"} style={styles.button} onPress={onLogin}>
            Зареєструватися
          </Button>
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 24,
    // fontWeight: "bold",
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
