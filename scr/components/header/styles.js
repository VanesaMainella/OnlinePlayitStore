import {StyleSheet, StatusBar} from 'react-native';
import { COLORS } from '../../themes';

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
        fontSize:25,
        color: COLORS.text,
        fontWeight:'bold', /// letra en negrita

    }
});