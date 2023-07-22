import { TextInput, View } from "react-native";

import {styles} from "./styles";

const Input=({
 borderColor,
 onHandleFocus,
 onHandleBlur,
 onHandleChangeText,
 value,
 placeholder,
 autoCapitalize,
 cursorColor,
 ... props
}) =>{
    return(
       <View style={styles.container} >
          <TextInput
          {... props}
          style={[styles.Input, {borderColor}]}
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          onChangeText={onHandleChangeText}
          value={value}
          autoCorrect={false}
          autoCapitalize="none"
          cursorColor={borderColor}
          placeholderTextColor={borderColor}
           />
       </View>
    )
}

export default Input;