import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";
const CategoryItem = ({ id, name, backgroundImage,backgroundColor, onSelectCategory}) =>{

    const isTablet= width>650;
    const {width}= useWindowDimensions();
    return (/// touchablehighlight, es para que cuando presione el boton se cambie de color
         <TouchableHighlight onPress={()=> onSelectCategory(id)} 
         style= {[ styles.container, {backgroundColor}]}
         underlayColor="#ccc">
            <ImageBackground
                source={{uri:backgroundImage}} 
                style= {isTablet ? styles.ImageBackgroundTablet : styles.ImageBackground} 
                resizeMode={isTablet ? "contain": "cover"}>
                <Text style={ isTablet ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
            </ImageBackground>
         </TouchableHighlight>
    );
};
export default CategoryItem;