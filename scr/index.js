
import { SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import { FONTS, COLORS } from './themes';
import { useFonts } from 'expo-font';
import RootNavigator from './navigations';
import {store} from './store';
import { Provider } from 'react-redux';

export default function App(){
  
  const [loaded] = useFonts({
    [FONTS.regular]: require ('../assets/fonts/Inter-Regular.ttf'),
    [FONTS.bold]: require ('../assets/fonts/Inter-Bold.ttf'),
    [FONTS.medium]: require ('../assets/fonts/Inter-Medium.ttf'),
    [FONTS.light]: require ('../assets/fonts/Inter-Light.ttf'),
  })
 /// const categoryDefault = {
 ///   categoryId:null,
 ///   color: COLORS.primary,
 /// }
 //// const [IsCategorySelected, setIsCategorySelected] = useState(false);
 /// const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

///  const HeaderTitle  = IsCategorySelected ? 'Products' : 'Categories';

////  const onHandleSelectCategory = ({categoryId, color}) => {
 ///   setIsCategorySelected(!IsCategorySelected);
 ///   setSelectedCategory({categoryId, color});
//  };
///  const onHandleNavigate = () => {
 ///   setIsCategorySelected(!IsCategorySelected);
///    setSelectedCategory(categoryDefault);
//  };

  if(!loaded){
    return (
      <View style= {styles.loaderContainer}>
    <ActivityIndicator color= {COLORS.primary} size='large'/>
    </View>
    );
  }

  return(
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
   <RootNavigator/>
    </SafeAreaView>
    </Provider>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
  },

  loaderContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }

});