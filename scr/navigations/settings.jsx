import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons';
import {Settings, Profile, Address} from '../screens';
import {FONTS, COLORS} from '../themes';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
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
        headerLeft: ()=> (
          <TouchableOpacity style= {styles.goBack} onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={30} color= "black"/>
          </TouchableOpacity>
      ),
    ///  headerRight:null,
        
    })}>

      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name= "Profile" component={Profile} />
      <Stack.Screen name="Address" component={Address} />


    </Stack.Navigator>
  );
};

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

export default SettingsNavigator;