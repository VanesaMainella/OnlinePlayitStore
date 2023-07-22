import { TouchableHighlight, ImageBackground, Text } from "react-native";

import { styles } from "./styles";
const CategoryItem = ({ id, name, backgroundImage,backgroundColor, onSelectCategory}) =>{
    return (/// touchablehighlight, es para que cuando presione el boton se cambie de color
         <TouchableHighlight onPress={()=> onSelectCategory(id)} 
         style= {[styles.container, {backgroundColor}]}
         underlayColor="#ccc">
            <ImageBackground
                source={{uri:backgroundImage}} 
                style= {styles.ImageBackground} 
                resizeMode="cover">
                <Text style={styles.categoryName}>{name}</Text>
            </ImageBackground>
         </TouchableHighlight>
    );
};
export default CategoryItem;