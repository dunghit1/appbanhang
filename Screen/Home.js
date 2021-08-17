import React from 'react';
import {Dimensions} from 'react-native'
import {View,Text, TouchableOpacity,StyleSheet,Image, ScrollView} from 'react-native'
function Home ({navigation}){
  const {Width,height} =Dimensions.get('window');
  return(
  
<View>
  <View style={Styles.Header}>
     <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:'15%'}}>
       <TouchableOpacity onPress={()=>navigation.openDrawer()}>
       <Image source={require('../Image/Menu.png')} style={{height:'70%',width:50,marginTop:10}}/>
       </TouchableOpacity>
     </View>
     <View style={{hieght:'100%',width:'70%',justifyContent:'center',alignItems:'center'}}>
       <Text style={Styles.Title}>Hip Shop</Text>
     </View>
     <View>
       <TouchableOpacity>
         <Image source={require('../Image/iconSearch.png')} style={{height:50,width:50,marginTop:15}}/>
       </TouchableOpacity>
     </View>
  </View>
  <View style={{marginLeft:10,backgroundColor:'#E8E8E8',height:height*0.83,marginTop:20}}>
    <ScrollView>
      <View style={{height:40,justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#696969',paddingLeft:20}}>Áo Thun</Text>
      </View>
      <View style={{height:310}}>
           <ScrollView horizontal={true}>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity onPress={() => navigation.navigate('HomeStack', { screen: 'Mater' })} >
           <View style={{height:230,width:200,backgroundColor:'white'}}>
             <Image source={require('../Image/ao1.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70}}>
             <Text style={{fontSize:20}}>    Mater Badideas </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white',}}>
             <Image source={require('../Image/ao2.png')} style={{height:230,width:200,}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>         False God </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/ao3.png')} style={{height:220,width:200,marginTop:10}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>              OK DOK </Text>
             <Text style={{fontSize:20}}>             269.000đ </Text>
           </View>
       </View>   
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white',paddingTop:10}}>
             <Image source={require('../Image/ao4.png')} style={{height:220,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>     DANDERMALL </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View > 
       <View style={{flexDirection:'column'}}>  
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/ao5.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>            ADLV </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View>    
      </ScrollView>
        </View>
      <View style={{height:40,justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#696969',paddingLeft:20}}>Áo Wash</Text>
      </View>
      <View style={{height:310}}>
           <ScrollView horizontal={true}>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:230,width:200,backgroundColor:'white'}}>
             <Image source={require('../Image/aowash1.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70}}>
             <Text style={{fontSize:20}}>         Sky High </Text>
             <Text style={{fontSize:20}}>         289.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white',}}>
             <Image source={require('../Image/aowash2.png')} style={{height:230,width:200,}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>           Braap </Text>
             <Text style={{fontSize:20}}>         289.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/aowash3.png')} style={{height:220,width:200,marginTop:10}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>              MusTang </Text>
             <Text style={{fontSize:20}}>             289.000đ </Text>
           </View>
       </View>   
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white',paddingTop:10}}>
             <Image source={require('../Image/aowash4.png')} style={{height:220,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>       Supper Dogs </Text>
             <Text style={{fontSize:20}}>         289.000đ </Text>
           </View>
       </View > 
       <View style={{flexDirection:'column'}}>  
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/aowash5.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>       Horror Project </Text>
             <Text style={{fontSize:20}}>         289.000đ </Text>
           </View>
       </View>    
      </ScrollView>
        </View>
      
      <View style={{height:40,justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#696969',paddingLeft:20}}>Quần Đùi</Text>
      </View>
      <View style={{height:310}}>
           <ScrollView horizontal={true}>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:230,width:200,backgroundColor:'white'}}>
             <Image source={require('../Image/quandui1.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70}}>
             <Text style={{fontSize:20}}>           Adidas </Text>
             <Text style={{fontSize:20}}>         290.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white',}}>
             <Image source={require('../Image/quandui2.png')} style={{height:230,width:200,}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>            Nike </Text>
             <Text style={{fontSize:20}}>         290.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/quandui3.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>                 FG </Text>
             <Text style={{fontSize:20}}>             290.000đ </Text>
           </View>
       </View>   
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/quandui4.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>     Assential White </Text>
             <Text style={{fontSize:20}}>         290.000đ </Text>
           </View>
       </View > 
       <View style={{flexDirection:'column'}}>  
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/quandui5.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>            Nike SB </Text>
             <Text style={{fontSize:20}}>          290.000đ </Text>
           </View>
       </View>    
      </ScrollView>
        </View>
      <View style={{height:40,justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#696969',paddingLeft:20}}>Quần Âu</Text>
      </View>
      <View style={{height:310}}>
           <ScrollView horizontal={true}>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:230,width:200,backgroundColor:'white'}}>
             <Image source={require('../Image/ao1.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70}}>
             <Text style={{fontSize:20}}>    Mater Badideas </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white',}}>
             <Image source={require('../Image/ao2.png')} style={{height:230,width:200,}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>         False God </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View>
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/ao3.png')} style={{height:220,width:200,marginTop:10}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>              OK DOK </Text>
             <Text style={{fontSize:20}}>             269.000đ </Text>
           </View>
       </View>   
       <View style={{flexDirection:'column'}}>
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white',paddingTop:10}}>
             <Image source={require('../Image/ao4.png')} style={{height:220,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>     DANDERMALL </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View > 
       <View style={{flexDirection:'column'}}>  
           <TouchableOpacity>
           <View style={{height:200,width:200,marginLeft:10,backgroundColor:'white'}}>
             <Image source={require('../Image/ao5.png')} style={{height:230,width:200}}/>
           </View>
           </TouchableOpacity>
           <View style={{height:70,marginTop:30}}>
             <Text style={{fontSize:20}}>            ADLV </Text>
             <Text style={{fontSize:20}}>         269.000đ </Text>
           </View>
       </View>    
      </ScrollView>
        </View>
    </ScrollView>
  </View>
</View>
  );
}
const Styles=StyleSheet.create({
  Header:{
    backgroundColor:'#008080',
    height:70,
    flexDirection:'row',
    
  },
  Title:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
    fontFamily:'vincHand'
  }
})
export default Home;