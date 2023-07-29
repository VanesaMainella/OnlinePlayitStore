import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:15,
        marginTop:15,
    
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap:5,
    },


    goBack: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical:10,
    },

    goBackText:{
        fontSize:14,
        color: COLORS.black,

    },

    products:{
        flex:1,

    },

    notFound:{
        flex:1,
        alignItems: 'center',
    },

    notFoundText:{

    },

    clearIcon:{
        position: 'absolute',
        zIndex:2, 
        right:5,
    },

    productContainer:{
        backgroundColor: COLORS.background,
        borderRadius:10,
        width:'45%',
        marginHorizontal:5,
        
    },

    productsContent: {
        gap:10,
        paddingVertical:25,
        
    },

    productImage:{
        width:'100%',
        height:140,
    },

    productDetail:{
        padding:10,
        gap: 5,
    },

    productName:{
        fontSize:14,
    },

    productPrice:{
    fontSize:15,
    fontWeight: 'bold',
    
    },
});