import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './navigation'
import 'react-native-gesture-handler';

const App = () => {
  return (
    
      <NavigationContainer>
        <MyStack/>
         {/* <Home/> */}
      {/* <Quiz/> */}
      {/* <Result/> */}
      </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
})