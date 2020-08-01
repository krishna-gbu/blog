import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen'
import React from 'react'
import {BlogProvider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

// const title = 'fuck';

const navigator = createStackNavigator(
 {
     index:IndexScreen,
     Show:ShowScreen,
     Create:CreateScreen,
     Edit:EditScreen,
    
 },
 {
   initialRouteName:'index',
   defaultNavigationOptions:{
     title:"Blog App"
   }
 }
)

const App = createAppContainer(navigator)
export default ()=>{
  return  <BlogProvider>  
          <App/>
         </BlogProvider>
}