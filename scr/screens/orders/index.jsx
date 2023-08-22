import { View,Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { useGetOrdersQuery } from "../../store/orders/api";
import { FlatList } from "react-native-gesture-handler";

const Orders = () => {
    const {data, error, isLoading}= useGetOrdersQuery();

    const renderItem= ({item}) => (
     <TouchableOpacity onPress={()=>{}} style={styles.orderItem}>
         <Text style={styles.orderItemId}>{item.id}</Text>
         <Text style={styles.orderItemTotal}>{item.total}</Text>
         <Text style={styles.orderItemDate}>{item.createAt}</Text>
     </TouchableOpacity>
    );

    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={styles.container}>

        <FlatList
        data={data} 
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        />
        </View>
    );
};

export default Orders;