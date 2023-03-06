/*import * as React from 'react'
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from 'native-base'
import {useState} from "react";
import ClientRequest from '../../routes/ExternalCalls/ClientRequest'
import PropTypes from "prop-types";
import { colors } from 'theme'

export const Login = ({navigation}) => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email </FormControl.Label>
          <Input onChange = {(event) => {
            setEmail(event.target.value);
          }}/>
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input onChange = {(event) => {
            setPassword(event.target.value);
          }}/>
          <Link
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: colors.darkPurple,
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" backgroundColor={colors.darkPurple} onPress={async () => {
          const result = await ClientRequest.clientLogin(email, password)
          console.log(result)
          navigation.navigate('News', { from: 'Login' });

        }}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            I'm a new user.{' '}
          </Text>
          <Link
            _text={{
              color: colors.darkPurple,
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="#"
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
        </Center>
    </NativeBaseProvider>
  )
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Login.defaultProps = {
  navigation: { navigate: () => null },
}
export default Login;*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TextInput,
  Text,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,

} from "react-native";
import styles from "../../styles/main";
import { firebase } from "../../firebase/config";
import { ActivityIndicator } from "react-native-paper";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading:false
    };
  }

  registerUser = (navigation) => {
    // Navigate to Register
    this.props.navigation.navigate("Form");
  };

  LoginClicked = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithemailandpassword
      // Signs in using email and password
      .signInWithEmailAndPassword(email, password)
      // Returns UserCredential
      // https://firebase.google.com/docs/reference/js/firebase.auth#usercredential
      .then((resp) => {
        const uid = resp.user.uid;
        // FIRESTORE - Persistent server side
        // firebase.firestore() return a Firestore object
        // collection(path) - returns a CollectionReference associated to path
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid) // Gets the Document Reference associated to uid
          // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?hl=pt-br#get
          .get() // Read de document associated to the Document Reference
          .then((firestoreDocument) => {
            // Returns a Promise with a parameter of type DocumentSnapshot
            // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot?hl=pt-br
            if (!firestoreDocument.exists) {
              alert("Username does not exist.");
              return;
            }
            // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot?hl=pt-br#data
            const user = firestoreDocument.data(); // Retrieves all fields in the document as an Object. Returns 'undefined' if the document doesn't exist.

            this.props.navigation.navigate("News", { user });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/invalid-email")
          alert("Invalid email:" + errorMessage);
        if (errorCode === "auth/user-not-found")
          alert("User not found" + errorMessage);
        if (errorCode === "auth/wrong-password")
          alert("Wrong password." + errorMessage);
        if (errorCode === "auth/user-disabled")
          alert("User is not enabled" + errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles1.anotherview}>
          <Text style={styles.header}>Login</Text>

          <TextInput
            style={styles.placeHolder}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />

          <TextInput
            style={styles.placeHolder}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={this.LoginClicked.bind(this)}
            //onPress ={this.props.navigation.navigate("App", {user})}
          >
            <Text style={styles.TextStyle}> LOGIN </Text>
          </TouchableOpacity>

          <Text style={styles1.textstyle}>Dont have account?</Text>
          <TouchableOpacity
            style={styles.buttonText}
            activeOpacity={0.5}
            onPress={this.registerUser}
          >
            <Text style={styles1.registertextstyle}> Register </Text>
          </TouchableOpacity>

          <Text style={styles1.textstyle}>Forgot Password?</Text>
          <TouchableOpacity
            style={styles.buttonText}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("PasswordReset")}
          >
            <Text style={styles1.registertextstyle}> Reset here </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Login.defaultProps = {
  navigation: { navigate: () => null },
}

export default Login;
const styles1 = StyleSheet.create({
  anotherview: {
    width: 250,
    justifyContent: "center",
    margin: 30,
  },
  textstyle: {
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
  },
  registertextstyle: {
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

