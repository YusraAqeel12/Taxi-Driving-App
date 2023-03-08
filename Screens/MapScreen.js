import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from "../components/Map"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from '../components/NavigateCard';
import RideOptions from '../components/RideOptions';
import RiderPayments from "../Screens/RiderPayments"
import NavFav from '../components/NavFav';
const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>

      <View
        style={tw`h-1/2 `}>
        <Map />
      </View>
      
      <View
        style={tw`h-1/2`}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="NavigationCard" component={NavigateCard} />
          <Stack.Screen name="RideOptions" component={RideOptions} />

        </Stack.Navigator>

      
      </View>


    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})