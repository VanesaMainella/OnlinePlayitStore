import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { Categories, Products, ProductDetails } from "../screens";
import { COLORS, FONTS } from "../themes";
import { TouchableOpacity, StyleSheet, Text, animation} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import SettingsNavigator from "./settings";

const Stack = createNativeStackNavigator();

function ShopNavigator(){

    return (
        <Stack.Navigator initialRouteName="Categories" 
        screenOptions={({navigation})=> ({
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
            headerRight: () => (
                <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('SettingsStack')}>
                    <Ionicons name= "settings-outline" size={24} color= {COLORS.white}/>
                </TouchableOpacity>
            ),
        })}>

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
                headerLeft: ()=> (
                <TouchableOpacity style= {styles.goBack} onPress={()=>navigation.goBack()}>
                  <Ionicons name="arrow-back-circle" size={30} color= "black"/>
                </TouchableOpacity>
            ),
            title: route.params.name,
               
            })}/>
            <Stack.Screen
            name= 'SettingsStack'
            component={SettingsNavigator}
            options ={({navigation, route})=> ({ 
                headerLeft: ()=> (
                <TouchableOpacity style= {styles.goBack} onPress={()=>navigation.goBack()}>
                  <Ionicons name="arrow-back-circle" size={30} color= "black"/>
                </TouchableOpacity>
            ),
            title: 'Settings',
            headerRight:null,
            })}
            />

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