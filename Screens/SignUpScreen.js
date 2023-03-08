import { useNavigation } from "@react-navigation/native";
import React from "react";
import Color from "../components/Color";
import { Text, SafeAreaView, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native"
const SignUpScreen = props => {
    const navigation = useNavigation();
    const SignUpHandler = props => {
        navigation.navigate("HomeScreen")
    }
    return (
        <SafeAreaView
            style={{ backgroundColor: Color.bgWhite, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Image style={{ width: 200, height: 200 }}
                source={{ uri: "https://seekvectorlogo.com/wp-content/uploads/2018/04/lecab-vector-logo-small.png" }} />
            <TextInput style={styles.inputBox}
                placeholder="Enter Your Full Name"
                placeholderTextColor="#ffffff"
                selectionColor="#fff" />

            <TextInput style={styles.inputBox}
                placeholder="Enter Your Email Address"
                placeholderTextColor="#ffffff"
                selectionColor="#fff" />

            <TextInput style={styles.inputBox}
                placeholder="Enter Your Phone Number "
                placeholderTextColor="#ffffff"
                selectionColor="#fff" />

            <TouchableOpacity
                onPress={SignUpHandler}
                style={styles.button}>
                <Text style={styles.buttonText}>SIGN IN  </Text>
            </TouchableOpacity>


        </SafeAreaView>

    )
}
export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "bgwhite",
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 300,
        height: 45,
        backgroundColor: '#EE7600',
        paddingHorizontal: 25,
        borderRadius: 6,
        marginVertical: 5,
        fontSize: 17,
        color: '#ffffff',
        fontWeight: "600"
    },
    button: {
        marginTop: 15,
        backgroundColor: '#495965',
        width: 300,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: '900'
    },


})