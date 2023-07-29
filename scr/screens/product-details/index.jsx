import { View, Text, Image} from "react-native";
import { styles } from "./styles";
import PRODUCTS from '../../constants/data/productos.json';
import { TouchableOpacity } from "react-native-gesture-handler";

function ProductDetail ({navigation, route}) {
const  {color, productId} = route.params;

const product = PRODUCTS.find((product)=> product.id === productId);

    return (
        <View style = {styles.container}>
            <View style={[styles.containerImage,{backgroundColor: color}] }>
            <Image source={{uri: product.image}} style= {styles.image} resizeMode="contain"/>
            </View>
            <View style={styles.content}></View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}> USD{product.price}</Text>
            <View style={styles.containerTags}>
                <Text style={styles.tagTitle}>Tags</Text>
            {product.tags.map((tag)=> (
            <TouchableOpacity key={tag} style= {[styles.containerTag, {backgroundColor: color}]}>
            <Text  style={styles.tag}>{tag}</Text>
            </TouchableOpacity>
            ))}

            </View>
           
        </View>
    );
}

export default ProductDetail;