import {
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { selecttravelTimeInformation } from "../slices/navSlice";

const RideOptionsCard = (props) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(setSelected);
  const travelTimeInformation = useSelector(selecttravelTimeInformation);


  return (
    <SafeAreaView style={tailwind`bg-white flex-1`}>
      <View style={tailwind``}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tailwind`absolute top-1 left-0 px-5 rounded-full`}
        >

          <MaterialCommunityIcons name="arrow-right-thin"
            size={24}
            color="black"
            onPress={() => navigation.navigate("NavigateCard")} />
        </TouchableOpacity>
        <Text style={tailwind`text-center mb-5 text-lg`}>
          Select a Ride

        </Text>

      </View>
      <FlatList
        data={ridesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)} //on press set setselected into item
            style={tailwind.style(
              `flex-row justify-between items-center px-6`,
              id === selected?.id && "bg-gray-200" //if the id is equal to selected go to bg grey
            )}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: image,
              }}
            />
            <View style={tailwind`-ml-8`}>
              <Text style={tailwind`text-lg font-bold`}>{title}</Text>
            </View>

          </TouchableOpacity>
        )}
      />
      <View style={tailwind`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LastScreen")}
          disabled={!selected} //touchable is disabled if there is no selected item
          style={tailwind.style(
            `bg-black py-3 m-3`,
            !selected && "bg-gray-200"
          )} //if there is no selected item background should be gray
        >
          <Text style={tailwind`text-center text-white text-lg`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const ridesData = [
  {
    id: "Uber-X-123",
    title: "Mini",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Comfort",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Premium",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

export default RideOptionsCard;