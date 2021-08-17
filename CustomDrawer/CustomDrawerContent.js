import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function CustomDrawerContent({navigation}) {
    // const [ShowList,SetShowList] =useState();
   
  return (
    <View>
      <View style={Styles.Header}>
        <Image
          source={require('../Image/image.png')}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginLeft: 15,
            marginTop: 15,
            borderColor: 'white',
            borderWidth: 2,
          }}
        />
        <View style={Styles.TextHeader}>
          <Text style={{color: 'white', fontSize: 24,marginLeft:20, fontWeight: 'bold'}}>
            Dũng Hít
          </Text>
          <Text style={{color: 'white', fontSize: 18}}>
            hipcucsuc@gmail.com
          </Text>
        </View>
      </View>
      <View style={Styles.Body}>
      <View style={Styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../Image/dangnhap.png')}
              style={{height: 40, width: 40, marginLeft: 13, marginTop: 15}}
            />
            <Text style={{marginTop: 27, fontSize: 20,fontWeight:'bold', marginLeft: 17}}>
              Tài Khoản
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../Image/aothun.png')}
              style={{height: 37, width: 37, marginLeft: 15, marginTop: 25,borderRadius:4}}
            />
            <Text style={{marginTop: 35, fontSize: 20,fontWeight:'bold', marginLeft: 15}}>
              Áo Thun
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../Image/aothun.png')}
              style={{height: 37, width: 37, marginLeft: 15, marginTop: 25,borderRadius:4}}
            />
            <Text style={{marginTop: 35, fontSize: 20,fontWeight:'bold', marginLeft: 15}}>
              Áo Wash
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../Image/quandui.png')}
              style={{height: 37, width: 37, marginLeft: 15, marginTop: 25,borderRadius:4}}
            />
            <Text style={{marginTop: 35, fontSize: 20,fontWeight:'bold', marginLeft: 15}}>
              Quần Đùi
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../Image/quanau.png')}
              style={{height: 47, width: 62, marginLeft: 5,marginTop: 25,borderRadius:4}}
            />
            <Text style={{marginTop: 35, fontSize: 20,fontWeight:'bold', marginLeft: 3}}>
              Quần Âu
            </Text>
          </TouchableOpacity>
        </View>
      
        
        {/* {
            showList ? 
            ( 
                <ScrollView onPress={()=>this._onPressFacebook}>
                    <View>
                        <TouchableOpacity><Text>1</Text></TouchableOpacity>
                        <TouchableOpacity><Text>2</Text></TouchableOpacity>
                        <TouchableOpacity><Text>3</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            ):null
        } */}
        
        <View style={Styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('signUp')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../Image/dangky.png')}
              style={{height: 40, width: 40, marginLeft: 15, marginTop: 15}}
            />
            <Text style={{marginTop: 27, fontSize: 20,fontWeight:'bold', marginLeft: 15}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('signUp')}
            style={{flexDirection: 'row'}}>
            <Image
              source={require('../Image/dangxuat.png')}
              style={{height: 40, width: 40, marginLeft: 15, marginTop: 15}}
            />
            <Text style={{marginTop: 27, fontSize: 20,fontWeight:'bold', marginLeft: 15}}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  Header: {
    backgroundColor: '#800000',
    height: 90,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    flexDirection: 'row',
  },
  TextHeader: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  Body:{
     
  },
  bottom:{
      borderBottomWidth:1,
      borderBottomColor:'#C0C0C0',
      paddingBottom:15,
      height:65,
      justifyContent:'center',
  }
});

export default CustomDrawerContent;
