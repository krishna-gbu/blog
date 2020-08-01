import React ,{useContext} from 'react'
import {View,Text,StyleSheet } from 'react-native'
import BlogContext from '../context/BlogContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
 
const ShowScreen = ({navigation}) => {
    // console.log({navigation})
    //  console.log(navigation.getParam('id'))
     const {data} = useContext(BlogContext);
    //  console.log(data)

    const blogPost = data.find(blogPost => blogPost.id === navigation.getParam('id'));      
      return <View>
             <Text>{blogPost.title}</Text>
             <Text>{blogPost.content}</Text>
            </View>
}


ShowScreen.navigationOptions =({navigation})=>{
  return {
       headerRight:()=> <TouchableOpacity onPress = {()=>{navigation.navigate('Edit',{id:navigation.getParam('id')})}}>
         <EvilIcons name="pencil" size={34} color="black"/> 
          </TouchableOpacity>

       
  }
}

const style = StyleSheet.create({
  
})

export default ShowScreen;