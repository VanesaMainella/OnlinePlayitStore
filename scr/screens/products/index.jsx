import { View, Text, Button, TouchableOpacity, FlatList, Image, ImageBackground } from "react-native";
import { styles } from "./styles";
import { Input } from '../../components';
import { useState } from "react";
import { COLORS } from "../../themes";
import{Ionicons} from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/productos.json';

function Product ({navigation, route}) {
    const {categoryId, color}= route.params;
    const [filteredProduct, setFilteredProducts] = useState ([]);
    const [borderColor, setBorderColor] = useState (COLORS.primary);
    const [search, setSearch] = useState ('');
    const onHandleBlur = () => {};
    const onHandleChangeText = (Text) => {
        setSearch(Text);
        filterBySearch(Text);
    };
    const onHandleFocus = () => {};
    const filteredProductsByCategory = PRODUCTS.filter((Product)=> Product.categoryId == categoryId);
    const filterBySearch = (query) =>  {
      let updatedProductList = [...filteredProductsByCategory] ;

      updatedProductList = updatedProductList.filter((Product) => {
        return Product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      setFilteredProducts(updatedProductList);
    };
    
    const clearSearch = () => {
      setSearch('');
      setFilteredProducts([]);
    };
    
    const onSelectProduct= ({productId, name }) => {
      navigation.navigate('ProductDetails', {productId, color, name });
    };

    return (
     <View style = {styles.container}>
     <View style={styles.header} >
      <Input
       onHandleBlur={onHandleBlur}
       onHandleChangeText={onHandleChangeText}
       onHandleFocus={onHandleFocus}
       value={search}
       placeholder="Search"
       borderColor={borderColor}
       />
      
     {search.length > 0 && (
     <Ionicons style= {styles.clearIcon} onPress={clearSearch} name= "close-circle" size={20} color= "black"/>
     )}

     </View>
     <FlatList
      style= {styles.products}
      data= {search.length > 0 ? filteredProduct : filteredProductsByCategory}
      renderItem={({item}) => (
      <TouchableOpacity onPress={()=> onSelectProduct({productId: item.id, name: item.name})} style={styles.productContainer}>
       <ImageBackground source = {{uri: item.image}} style={[styles.productImage, {backgroundColor: color}]}
       resizeMethod='resize'
       resizeMode= "contain"
       />
      <View style={styles.productDetail}> 
            <Text style= {styles.productName} numberOfLines={1} ellipsizeMode= "tail"> {item.name} </Text>
            <Text style= {styles.productPrice}> {`${item.currency.code} ${item.price}`} </Text>
     </View>

      </TouchableOpacity>
      )}
      contentContainerStyle={styles.productsContent}
      keyExtractor={(item)=> item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
     />

     {filteredProduct.length == 0 && search.length > 0 &&(
      <View style= {styles.notFound}>
        <Text style={styles.notFoundText}>No products found</Text>
        </View>
     )}
     </View>

    );

    }
export default Product;