import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";
import { COLORS, FONTS } from "../themes";
import {Ionicons} from '@expo/vector-icons/';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false,
            tabBarLabelStyle:{
                fontFamily: FONTS.regular,
                fontSize:12,
            },
            tabBarStyle:{
                backgroundColor: COLORS.white,
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarIconStyle:{
                fontSize:22,
            }

        }}> 
        <BottomTab.Screen name= "ShopTab" component={ShopNavigator} options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({focused, color})=>(
                <Ionicons name={ focused ? 'home' : 'home-outline'} size={20} color={color}/>
            ),
        }}/>
        <BottomTab.Screen name= "CartTab" component={CartNavigator} options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({focused, color})=>(
                <Ionicons name={ focused ? 'cart' : 'cart-outline'} size={20} color={color}/>
            ),
            tabBarBadge: 2,
            tabBarBadgeStyle:{
                backgroundColor: COLORS.secondary,
                color: COLORS.white,
                fontFamily: FONTS.regular,
                fontSize:11,
            }
        }}/>
        <BottomTab.Screen name= "OrdersTab" component={OrdersNavigator} options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({focused, color})=>(
                <Ionicons name={ focused ? 'file-tray' : 'file-tray-outline'} size={20} color={color}/>
            ),
        }}/>

        </BottomTab.Navigator>
    );
};

export default TabsNavigator;