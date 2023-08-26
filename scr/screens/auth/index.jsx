import { useState } from "react";
import { styles } from "./styles";
import {View, Text, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from '../../themes';
import { useSignInMutation, useSignUpMutation } from "../../store/auth/api";

const Auth = () => {
    const [isLogin, setIsLogin] = useState (true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const headerTitle = isLogin ? "Login" : "Register";
    const buttonTitle = isLogin ? "Login" : "Register";
    const messageText = isLogin ? "Need an account?" : "Already have an account?";

    const [singIn] = useSignInMutation();

    const [singUp] = useSignUpMutation();

    const onHandlerAuth = async () => {
      try {
        if (isLogin) {
         await singIn({email,password});
        } else{
         await singUp({email,password});
        }
      } catch (error){
        console.error(error);
      }
  
    };

        return (
        <View style = {styles.container}>
           <View style={styles.content}>
           <Text style={styles.header}>{headerTitle}</Text>
           <Text style={styles.label}>Email</Text>
           <TextInput style={styles.input} 
                      placeholder="email@domain.com" 
                      placeholderTextColor={COLORS.grey} 
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={(text)=>setEmail(text)}
                      value={email}
                      />
           <Text style={styles.label}>Password</Text>
           <TextInput style={styles.input} 
                      placeholder="**********" 
                      placeholderTextColor={COLORS.grey} 
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={(text)=>setPassword(text)}
                      secureTextEntry={true}
                      value={password}
                      />
                      <View style={styles.linkContainer}>
                        <TouchableOpacity style={styles.link} onPress={()=> setIsLogin (!isLogin)}>
                            <Text style={styles.linkText}>messageText</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={onHandlerAuth}>
                            <Text style={styles.buttonText}>{buttonTitle}</Text>
                        </TouchableOpacity>
                      </View>
           </View>
        </View>
    );
};

export default Auth;