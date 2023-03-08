import React from "react";
import {

    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import { Google_Maps_Api_Key } from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from "react-redux";
import { setOrigin, selectDestination, setDestination } from "../slices/navSlice";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";
import NavFav from "../components/NavFav";

const HomeScreen = ({ navigation }) => {
    const Dispatch = useDispatch();
    const origin = useSelector(selectOrigin)

    const data = [
        {
            id: 1,
            title: "Get a ride",
            image: "https://links.papareact.com/3pn",
            screen: "MapScreen",
        },
        {
            id: 2,
            title: "Order food",
            image: "https://links.papareact.com/28w",
            screen: "EatsScreen",
        },
    ];
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    source={{
                        uri: "https://seekvectorlogo.com/wp-content/uploads/2018/04/lecab-vector-logo-small.png",
                    }}
                    resizeMode={"center"}
                    style={{ height: 100, width: 100 }}
                />
            </View>

            <GooglePlacesAutocomplete
                onFail={error => console.error(error)}

                onPress={( data, details = null ) => {
                    dispatch(
                        setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                    dispatch(
                        setDestination(null)
                    )
                    console.log(data, details);
                }}
                enablePoweredByContainer={false}
                placeholder=" Where From ? "
                minLength={2}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={500}
                fetchDetails={true}
                styles={{
                    container: { flex: 0 },
                    textInput: { fontSize: 18 }
                }}

                query={{
                    key: Google_Maps_Api_Key,
                    language: 'en',
                }}



            />




            <View>
                <NavFav />
                <FlatList
                    data={data}
                    horizontal
                    // keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            // disabled={!origin}
                            key={item.id}
                            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                            onPress={() => navigation.navigate(item.screen)}
                        >
                            <View>
                                <Image
                                    source={{ uri: item.image }}
                                    resizeMode="contain"
                                    style={{ height: 120, width: 120 }}
                                />
                                <Text style={tw`mt-2 text-lg font-semibold`}>
                                    {item.title}
                                </Text>
                                <AntDesign
                                    name="arrowright"
                                    size={24}
                                    color="white"
                                    style={[
                                        tw`p-2 bg-black rounded-full w-10 mt-4`,
                                    ]}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />


            </View>

            <View
                style={{
                    height: "100%",
                    width: "100%"
                }}>











            </View>

        </SafeAreaView>
    );
};


export default HomeScreen;

const styles = StyleSheet.create({});
