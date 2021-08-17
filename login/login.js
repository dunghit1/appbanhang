import React from 'react';
import { View,Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native';

function login({navigation}){
    return(
        <View style={Styles.DangNhap}>
            <Text style={{fontSize:60,color:'white',fontWeight:'bold',marginTop:50}}>Hip Shop</Text>
          <View style={Styles.phanlogin}>
           <View>
               <Text style={{fontSize:40,fontWeight:'bold',marginTop:30}}>Đăng Nhập</Text>
           </View>
           <View style={{flexDirection:'row',marginTop:40}}>
             <Text style={Styles.chu}> User Name</Text>
             <TextInput
              style={Styles.TextInput}
              placeholder="nhập email / số điện thoại"
              onChangeText={text => setText(text)} />
           </View>
           <View style={{flexDirection:'row',marginTop:20}}>
             <Text style={Styles.chu}> PassWord </Text>
             <TextInput
              style={Styles.TextInput}
              placeholder="nhập mật khẩu"
              onChangeText={text => setText(text)} />
           </View>
           <TouchableOpacity>
               <Text style={{marginTop:10,marginLeft:220,color:'blue',fontSize:16}}>Quên Mật Khẩu ?</Text>
           </TouchableOpacity>
           <View style={{flexDirection:'row',marginTop:20}}>
           <TouchableOpacity 
           onPress={() => navigation.navigate('HomeStack', { screen: 'Home' })}
           style={Styles.login}
           
           >
               <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>Đăng Nhập</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           style={Styles.dangki}
           onPress={() => navigation.navigate('HomeStack', { screen: 'Regis' })}
           >
               <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>Đăng Kí</Text>
           </TouchableOpacity>
           </View>
          </View>
        </View>
    ); 
}
const Styles=StyleSheet.create({
    DangNhap:{
        alignItems:'center',
        backgroundColor:'#FF4500',
        flex:1,
        
    },
    TextInput:{
      borderWidth : 1,
      height:50,
      width:250,
      marginLeft:10,
      backgroundColor:'white'
      
    },
    chu:{
        fontSize:22,
        marginTop:10,
    },
    phanlogin:{
        backgroundColor:'white',
        height:370,
        width:420,
        alignItems:'center',
        marginTop:70
    },
    login:{
        height:40,
        backgroundColor:'#FF4500',
        width:150,
        justifyContent:'center',
        alignItems:'center'
    },

    dangki:{
        height:40,
        backgroundColor:'#FF4500',
        width:150,
        marginLeft:30,
        alignItems:'center',
        justifyContent:'center'
    }
  })
  export default login;