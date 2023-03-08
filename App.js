import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import MapScreen from "./Screens/MapScreen";
import EatsScreen from "./Screens/EatsScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LastScreen from "./Screens/LastScreen";
const Stack = createNativeStackNavigator();
function App({ navigation }) {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MapScreen" component={MapScreen} />
                <Stack.Screen name="EatsScreen" component={EatsScreen} />
                <Stack.Screen name="LastScreen" component={LastScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
export default App;
