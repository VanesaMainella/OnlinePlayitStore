import { FlatList, SafeAreaView, View, Text} from 'react-native';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json';
import { beginEvent } from 'react-native/Libraries/Performance/Systrace';

function Categories({onSelectCategory}) {
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList  ///lista
      data={CATEGORIES}
      style= {styles.categoryContainer}
      contentContainerStyle={styles.listCategory}
      renderItem={({item}) => <CategoryItem{... item} onSelectCategory={() => onSelectCategory({categoryId: item.id, color: item.backgroundColor})}/>}///recibe el objetos de cada uno de los items de ese arreglo de objetos
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      />
    </View>
    </SafeAreaView>
  );
}

 export default Categories;