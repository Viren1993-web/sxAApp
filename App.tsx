/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import SearchResult from './src/screens/SearchResult/indexSR';
import MemberSearch from './src/screens/MemberSearch/indexMS';
const Drawer = createDrawerNavigator();
function App() {

  return (
    //Navigation to the screen
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="MemberSearch" component={MemberSearch} />{/* Navigate to the Member Search screen */}
        <Drawer.Screen name="SearchResult" component={SearchResult}/>{/* Navigate to Member Search screen because if use did not enter details */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
