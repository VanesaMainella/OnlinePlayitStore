import {StyleSheet, StatusBar} from 'react-native';
import { COLORS, FONTS } from '../../themes';

export const styles=StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height:60,
        alignItems:'center', /// centrar texto
        justifyContent:'center',/// centrar texto
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5,
         },

    title: {
        fontSize:30,
        color: COLORS.text,
        fontFamily: FONTS.bold,

    },

    tabletTitle:{
        fontSize:35,
        color: COLORS.text,
        fontFamily: FONTS.bold,

    },

    tabletContainer:{
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height:100,
        alignItems:'center', /// centrar texto
        justifyContent:'center',/// centrar texto
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
    },
},

});