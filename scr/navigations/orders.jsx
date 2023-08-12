import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";
import {COLORS, FONTS} from "../themes";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Orders" screenOptions={{
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
            <Stack.Screen name="Orders" component= {Orders}/>
        </Stack.Navigator>
    );
};

export default OrdersNavigator;