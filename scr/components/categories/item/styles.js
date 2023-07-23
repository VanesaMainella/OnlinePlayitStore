import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({  //// creo el objeto
    container:{
      shadowColor: "#000",
      shadowOffset: {
	     width: 0,
	     height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,

       elevation: 5,
       borderRadius:10,
    },

    ImageBackground:{
     width:'100%', ///ancho de imagen
     height:150, ///alto
     justifyContent: 'flex-end', /// posiciono los elementos al final del lay-out
    },

    ImageBackgroundTablet: {
      width:'100%',
      height:250,
      justifyContent: 'flex-end',
    },

    categoryName:{
      fontSize:20,
      fontFamily: FONTS.bold,
      color: COLORS.text,
      padding:20, /// separar elementos
      textShadowColor:'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width:-1, height:1},
      textShadowRadius:6,
    },

    categoryNameTablet:{
      fontSize:35,
      fontFamily: FONTS.bold,
      color: COLORS.text,
      padding:20, /// separar elementos
      textShadowColor:'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width:-1, height:1},
      textShadowRadius:6,
    },

});