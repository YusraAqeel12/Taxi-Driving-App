import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { Google_Maps_Api_Key } from "@env";
  const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination=useSelector(selectDestination)

  useEffect(() => {
    if (!origin || !destination) return; //if there is no ori and dest

    const getTravelTime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${Google_Maps_Api_Key}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setTravelTimeInfo(data.rows[0].elements[0]));
    };

    getTravelTime();
  }, [origin, destination,Google_Maps_Api_Key]);

//You are fetching from google api na dthen we are getting response and store inf in redux
//Data.row sai access karo first array and then first array sai first element 
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <MapView
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825 ,             //origin.location.lat 
          longitude: -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,

        }} >
          

          {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng
            }}

            title="origin"
            description={origin.description}
            identifier="origin"

          />
        )}




      </MapView>
    </View>
  );
}

export default Map;

