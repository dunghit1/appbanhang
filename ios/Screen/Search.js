import React from 'react'
import Swiper from 'react-native-swiper';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
function Search(navigation) {
    const [text, onChangeText] = React.useState("Text");
    return (
        <View style={{backgroundColor:'white',marginTop:5}}>
            <View style={{height:90}}>
            <View style={{ flexDirection: 'row' }}>
                <View >
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Union Twp,NJ"
                        onChangeText={onChangeText}
                    />
                </View>
                <TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Image source={require('../Image/iconMapMarker.png')} style={{height:25 ,width:25}}/>
                    <Text style={{color:'red',fontSize:18}}>
                        Map
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} contentContainerStyle={{ height: 40 ,marginTop:10}}>
                <TouchableOpacity style={styles.Touch1}>
                    <Image source={require('../Image/iconFilters.png')} style={{ height: 15, width: 15 }} />
                    <Text>Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Touch2}>
                    <Text>Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Touch3}>
                    <Text>Bed/ Bath</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Touch4}>
                    <Text>Property Type</Text>
                </TouchableOpacity>
                
            </ScrollView>
            
        </View>
        <View>
            <Swiper style={styles.wrapper} showsButtons>
               <View style={styles.slide1}>
                  <Image source={require('../Image/Home1.png')}/>
               </View>
               <View style={styles.slide2}>
                   
               </View>
               <View style={styles.slide3}>
                    
               </View>
               <View style={styles.slide4}>
                    
               </View>
            </Swiper>
            </View>
            

        </View>
    )
}
const styles = StyleSheet.create({
    Touch1: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#BDBDBD',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        height:30,
        marginLeft:10,
        backgroundColor:'white',
        elevation:3
    },
    Touch2: {
        marginLeft:20,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#BDBDBD',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 60,
        backgroundColor:'white',
        elevation:3

    },
    Touch3: {
        marginLeft:20,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#BDBDBD',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 90,
        backgroundColor:'white',
        elevation:3

    },
    Touch4: {
        marginLeft:20,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#BDBDBD',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        backgroundColor:'white',
        elevation:3

    },
    TextInput: {
        backgroundColor: '#E6E6E6',
        height:37,
        width:330,
        marginLeft:10,
        borderRadius:10,
        fontSize:15
    },
    wrapper: {},
    slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
 },
 
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
})
export default Search;