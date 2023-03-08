import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
const AuthButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={Styles.mainContainer}>
            <Text style={Styles.btnTitle}>
                {props.btnTitle}
            </Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    mainContainer: {
        height: 40,
        width: 330,
        borderRadius: 6,
        backgroundColor: "#495965",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    btnTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})


export default AuthButton