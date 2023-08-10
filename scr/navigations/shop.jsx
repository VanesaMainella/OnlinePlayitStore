import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { Categories, Products, ProductDetails } from "../screens";
import { COLORS, FONTS } from "../themes";
import { TouchableOpacity, StyleSheet, Text, animation} from "react-native";
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
            animation:'fade_from_bottom',
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
            ),
            title: route.params.name,
            })}/>

            <Stack.Screen name="ProductDetails" component={ProductDetails} 
            options={({navigation, route})=> ({ 
                headerStyle: {
                 backgroundColor: route.params.color,
                },
                title: route.params.name,
                headerLeft: ()=> (
                <TouchableOpacity style= {styles.goBack} onPress={()=>navigation.goBack()}>
                  <Ionicons name="arrow-back-circle" size={30} color= "black"/>
                </TouchableOpacity>
            ),
               
            })}/>

        </Stack.Navigator>
    );
}


const styles = StyleSheet.create ({
    goBack: {
        flexDirection: "row",
        alignItems: "center",
        
    },

    goBackText:{
        fontSize:14,
        color: COLORS.black,

    },
});

export default ShopNavigator;