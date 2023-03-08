import React from "react"
import { View , TextInput , flexDirection} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const MyInput = (props) => {
    return (
        <View style= {{ flexDirection:"row" , height: 50, width: 330, backgroundColor: "#F78C32", borderRadius: 7, marginBottom: 10 , justifyContent:"center" , alignItems:"center"  }}>
        <MaterialCommunityIcons name={props.name} size={20} color="black"/>    
            <TextInput
                onChangeText={props.OnChangeText}
                style={{ width: "60%", marginLeft: 10, color: "white", fontSize: 15 }}
                placeholder={props.placeHolder}
                secureTextEntry={props.secure ? true : false}
                placeholderTextColor="black"
            />
        </View>
    )
}
export default MyInput