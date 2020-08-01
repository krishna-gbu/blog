import React ,{useContext, useState} from 'react'
import {View,Text,StyleSheet, Button } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler'
import BlogContent from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
 
const createScreen = ({navigation}) => {   
      // const [title,setTitle] = useState('')
      // const [Content,setContent] = useState('')
      const { addBlogPost } = useContext(BlogContent)
     
     
      return <BlogPostForm onSubmit ={(title,content)=>{
        addBlogPost(title,content,()=>navigation.navigate('index'))
      }} />


      // return <View>
      //       <Text style={style.label} >Enter Title:</Text>
      //       <TextInput style={style.input} value={title} onChangeText={text => setTitle(text)}/>
      //       <Text style={style.label}>Enter Content:</Text>
      //       <TextInput style={style.input} value={Content} onChangeText={content => setContent(content)}/>
      //       <Button title='Add Blog Post' onPress={() => { addBlogPost(title,Content,()=>{
      //            navigation.navigate('index'); });
      //        }}/> 
      //       </View>
}

const style = StyleSheet.create({
  // input:{
  //     fontSize:18,
  //     borderWidth:1,
  //     borderColor:'black',
  //     marginBottom:15,
  //     padding:5,
  //     margin:5
  // },
  // label:{
  //     fontSize:20,
  //     marginBottom:5,
  //     marginLeft:5
  // }

})

export default createScreen;