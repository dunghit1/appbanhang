import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 import Home from'./Screen/Home';
//  import Loading from './Screen/Loading';
 import CustomDrawerContent from './CustomDrawer/CustomDrawerContent'
 import { createStackNavigator } from '@react-navigation/stack';
import Mater from './Screen/Mater';

 const HomeStack =createStackNavigator();

 function HomeStackScreen(){
return(
   <HomeStack.Navigator screenOptions={{
      headerShown: false
    }} >
      <HomeStack.Screen name="Home" component={Home} /> 
      <HomeStack.Screen name="Mater" component={Mater}/>
   {/* <Stack.Screen name="Loading" component={Loading}/> */}
   </HomeStack.Navigator>
);

  

   
 }

 const Drawer =createDrawerNavigator();
function App () {
 return (
  <NavigationContainer>
   <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Drawer.Screen name="Loading" component={Loading}/> */}
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="HomeStack" component={HomeStackScreen}/>
   </Drawer.Navigator>
  </NavigationContainer>
 );
  
}
export default App;