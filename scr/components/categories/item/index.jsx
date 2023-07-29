import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";
const CategoryItem = ({ id, name, backgroundImage,backgroundColor, onSelectCategory, style}) =>{

   /// const isTablet= width>650;
  
    ///const {width}= useWindowDimensions();
    return (/// touchablehighlight, es para que cuando presione el boton se cambie de color
         <TouchableHighlight onPress={()=> onSelectCategory(id)} 
         style= {[ styles.container, {backgroundColor}]}
         underlayColor={COLORS.primary}>
            <ImageBackground
                source={{uri:backgroundImage}} 
                style= {[styles.ImageBackground, style]} 
                resizeMode= 'cover'>
                <Text style={styles.categoryName}>{name}</Text>
            </ImageBackground>
         </TouchableHighlight>
    );
};
export default CategoryItem;