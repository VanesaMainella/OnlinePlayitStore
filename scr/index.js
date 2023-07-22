
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { Header } from './components';
import {Categories, Products} from './screens';
import { useState } from 'react';
import { COLORS } from './themes';

export default function App(){
  
  const categoryDefault = {
    categoryId:null,
    color: COLORS.primary,
  }
  const [IsCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  const HeaderTitle  = IsCategorySelected ? 'Products' : 'Categories';


  
  const onHandleSelectCategory = ({categoryId, color}) => {
    setIsCategorySelected(!IsCategorySelected);
    setSelectedCategory({categoryId, color});
  };
  const onHandleNavigate = () => {
    setIsCategorySelected(!IsCategorySelected);
    setSelectedCategory(categoryDefault);
  };

  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header title = {HeaderTitle} style={{backgroundColor : selectedCategory.color}}/>
      {IsCategorySelected ? (
      <Products onHandleGoBack ={onHandleNavigate} categorySelected={selectedCategory}/> 
      ) : (
        <Categories onSelectCategory={onHandleSelectCategory}/>
      )}
      </View>
    </SafeAreaView>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
  },

});