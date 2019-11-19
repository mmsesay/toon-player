/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { 
  View, Text, StyleSheet , SafeAreaView,
} from 'react-native-tailwind'
import ThemeOne from './src/components/ThemeOne'

class App extends React.Component{
  
  render(){
    return (
      // <SafeAreaView>
        <View>
          <ThemeOne/>
        </View>
    )
  }
}


export default App;
