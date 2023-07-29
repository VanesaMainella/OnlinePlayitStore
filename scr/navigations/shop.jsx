import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { Categories, Products } from "../screens";
import { COLORS, FONTS } from "../themes";
import { TouchableOpacity, StyleSheet, Text} from "react-native";
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function ShopNavigator(){

    return (
        <Stack.Navigator initialRouteName="Categories" screenOptions={{
            presentation:'modal',
            headerStyle:{
                backgroundColor: COLORS.primary,
                height:80,
               
            },
            headerTitleStyle:{
                fontFamily: FONTS.bold,
                fontsize: 16,
            },
            headerTintColor: COLORS.black,
           
        }}>

            <Stack.Screen name="Categories" 
            component={Categories} />
            
            <Stack.Screen 
            name="Products" 
            component={Products} options={({navigation, route})=> ({ 
                headerStyle: {
                 backgroundColor: route.params.color,
                },

                headerLeft: ()=> (
                <TouchableOpacity style= {styles.goBack} onPress={()=>navigation.goBack()}>
                  <Ionicons name="arrow-back-circle" size={30} color= "black"/>
                </TouchableOpacity>
            )})}/>

        </Stack.Navigator>
    );
}


const styles = StyleSheet.create ({
    goBack: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical:10,
    },

    goBackText:{
        fontSize:14,
        color: COLORS.black,

    },
});

export default ShopNavigator;