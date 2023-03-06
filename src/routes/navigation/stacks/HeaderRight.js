
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { firebase } from "../../../firebase/config";
import React, { useEffect, useState } from "react";

const HeaderRight = ({navigation}) => {

  const logout = () => {
    navigation.navigate("Home");
  }

  const signOut = () => {
    firebase.auth().signOut();
    navigation.navigate("Home");
  };

  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    const User = await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log("User Data", documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return(
      <TouchableOpacity onPress={() => signOut()}>
        <Icon name="sign-out-alt" size={24} color="#fff" />
      </TouchableOpacity>
  )
}
HeaderRight.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
HeaderRight.defaultProps = {
  navigation: { navigate: () => null },
}
export default HeaderRight;
