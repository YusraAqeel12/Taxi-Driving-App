import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, flex } from "react-native"
import Colors from "../components/Color"
import MyInput from "../components/MyInput"
import AuthButton from "../components/AuthButton"

const LoginScreen = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        if (email === "yusra" && password === "123") {
            props.navigation.navigate("HomeScreen")
        } else {
            alert("Please enter a valid email or password")
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: Colors.bgWhite, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={{ uri: "https://seekvectorlogo.com/wp-content/uploads/2018/04/lecab-vector-logo-small.png" }}
                style={{ height: 200, width: 200 }}
            />
            <Text style={{ fontSize: 30, fontWeight: "800", marginBottom: 30 }}
            >Welcome To LeCab</Text>
            <View >
                <MyInput
                

                    OnChangeText={(text) => {
                        setEmail(text)
                    }}
                    placeHolder="Enter Your Email Address"
                    name="email"

                />

                <MyInput
                    OnChangeText={(text) => {
                        setPassword(text)
                    }}
                    secure
                    placeHolder="Enter Your Password"
                    name="lock"

                />

                <AuthButton
                    onPress={loginHandler}
                    btnTitle="LOGIN"
                />


                <TouchableOpacity onPress={() => props.navigation.navigate("SignUpScreen")} style={{ marginTop: 5, }}>
                    <Text style={{ color: "#F76800", fontSize: 17, fontWeight: "bold" }}> Don't have an account? SIGN UP here</Text>
                </TouchableOpacity>



            </View>
        </SafeAreaView>
    )
}

export default LoginScreen