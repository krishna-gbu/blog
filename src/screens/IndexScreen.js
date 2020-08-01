import React,{useContext,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Button} from 'react-native'
import BlogContext from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as F } from '@expo/vector-icons';


const IndexScreen =({navigation})=>{
   
  //  const value = useContext(BlogContext);
  //  const blogPosts = useContext(BlogContext);
   const { data , delBlogPost , getBlogPosts } = useContext(BlogContext);
   
     useEffect(()=>{
      getBlogPosts()  
      
      const listener = navigation.addListener('didFous',()=>{
       getBlogPosts();
      })
     
      return ()=>{
        listener.remove();
      }   

      },[])
      
    // console.log(getBlogPosts())

    // console.log(getBlogPosts())

  return <View>
      <Text style={{alignSelf:'center'}}>Index Screen</Text>
      {/* <Button title='Add Post' onPress={addBlogPost} /> */}
       <FlatList data={data} 
       keyExtractor={(blogPosts)=>blogPosts.title}
       renderItem={({item})=>{
        //  console.log(item)
        return <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
         <View style={Style.row}>
         <Text style={Style.title}> {item.title} -{item.id} </Text>
         <TouchableOpacity onPress={ () => delBlogPost(item.id)}>
         <Feather name="trash" style={Style.icon}/>
         </TouchableOpacity>
         </View>
         </TouchableOpacity>
        }}
       />
      {/* <Text> {value} </Text> */}
  </View>
};


IndexScreen.navigationOptions = ({navigation})=>{
  return {
    headerRight: () => <TouchableOpacity onPress={()=>navigation.navigate('Create')}> 
      <F name="plus" size={30} color="black"/> 
      </TouchableOpacity>
  }
}


const Style=StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:'gray'
  },
  title:{
    fontSize:18
  },
  icon:{
    fontSize:24
  }
})

export default IndexScreen;