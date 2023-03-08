import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const NavigateCard = () => {
  const navigation=useNavigation()
  const dispatch=useDispatch()
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1 }}>
      <Text
        style={{ textAlign: "center", fontSize: 20, marginTop: 5 }}
      >Good Morning</Text>
      <View   style={{backgroundColor : "gray" }}     >
        <GooglePlacesAutocomplete
          onFail={error => console.error(error)}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description
              })
            )
          
          navigation.navigate("RideOptions")
          console.log(data, details);
          }}
          enablePoweredByContainer={false}
          placeholder="Where To "
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={500}
          fetchDetails={true}

          query={{
            key: ' AIzaSyC6uOTIGbw3KVJoVz1ZMRfd3vNCuNWp2ao ',
            language: 'en',
          }} />



      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`bg-black flex-row w-24 justify-between items-center py-3 px-4 rounded-full`}
          onPress={() => navigation.navigate("RideOptions")}
        >
          <FontAwesome name="car" 
                       color="white" 
                       size={16} />
          
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={tw`flex-row w-24 justify-between py-3 px-4 rounded-full`}
        >
          <Ionicons
            name="fast-food-outline"
            color="black"
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>

      
      



    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})