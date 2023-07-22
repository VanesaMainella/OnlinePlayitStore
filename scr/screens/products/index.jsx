import { View, Text, Button, TouchableOpacity, FlatList, Image, ImageBackground } from "react-native";
import { styles } from "./styles";
import { Input } from '../../components';
import { useState } from "react";
import { COLORS } from "../../themes";
import{Ionicons} from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/productos.json';

function Product ({onHandleGoBack, categorySelected}) {
  
    const [filteredProduct, setFilteredProducts] = useState ([]);
    const [borderColor, setBorderColor] = useState (COLORS.primary);
    const [search, setSearch] = useState ('');
    const onHandleBlur = () => {};
    const onHandleChangeText = (Text) => {
        setSearch(Text);
        filterBySearch(Text);
    };
    const onHandleFocus = () => {};
    const filteredProductsByCategory = PRODUCTS.filter((Product)=> Product.categoryId == categorySelected.categoryId);
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
    
    return (
     <View style = {styles.container}>
      <TouchableOpacity style= {styles.goBack} onPress={onHandleGoBack}>
       <Ionicons name="arrow-back-circle" size={30} color= "black"/>
       <Text style={styles.goBackText} >Go back</Text>
      </TouchableOpacity>

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
      <View style={styles.productContainer}>
       <ImageBackground source = {{uri: item.image}} style={[styles.productImage, {backgroundColor: categorySelected.color}]}/>
      <View style={styles.productDetail}> 
            <Text> style= {styles.productName} 
            numberofLines:{1}
            ellipsizeMode= "tail"
            {item.name} </Text>
            <Text> style= {styles.productPrice}{`${item.currency.code}${item.price}`} </Text>
     </View>

      </View>
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