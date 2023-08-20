import { View,Text } from "react-native";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import {CartItem} from '../../components';
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from "../../store/cart/cart.slice";

const Cart = () => {
    const cart = useSelector((state)=> state.cart.items);

    const dispatch = useDispatch();
    const onIncreaseCartItem = (id) => {
        dispatch(increaseItemQuantity({id}));
    };

    const onDecreaseCartItem =(id) => {
        dispatch(decreaseItemQuantity({id}));
    };

    const onRemoveCartItem =(id) => {
        dispatch(removeItemFromCart({id}));
    };

    return (
        <View style={styles.container}>
        <FlatList
        data={cart}
        renderItem={({item}) => <CartItem {...item} onIncreaseCartItem= {onIncreaseCartItem} onDecreaseCartItem={onDecreaseCartItem} onRemoveCartItem={onRemoveCartItem}/> }
        keyExtractor={(item)=> item.id.toString()}
        style={styles.listContainer}
        />
        </View>
    );
};

export default Cart;