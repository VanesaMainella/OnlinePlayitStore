import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Cart} from '../screens';
import {COLORS, FONTS} from "../themes";

const Stack = createNativeStackNavigator();
const CartNavigator = ()=> {
    return (
        <Stack.Navigator initialRouteName="Cart" screenOptions={{
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
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )
};

export default CartNavigator;