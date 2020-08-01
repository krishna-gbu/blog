import React,{useState , useContext} from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import BlogContext from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = ({navigation})=>{
    const id = navigation.getParam('id')
    const {data,editBlogPost} = useContext(BlogContext)
    // console.log(data)
    const blogPost = data.find(blogPost=>blogPost.id === id)

    // const [title ,setTitle] =useState(blogPost.title)
    // const [content ,setContent] =useState(blogPost.content)


    // return <View>
    //   <Text> Edit Screen  </Text>
    //   <TextInput value={title} onChangeText={(newtitle)=>setTitle(newtitle)}/>
    // </View>

    return <BlogPostForm initialValues={{title:blogPost.title,content:blogPost.content}}
        onSubmit= {(title,content)=>{
            // console.log(title,content)
            editBlogPost(id,title,content,()=>navigation.pop())
        }}
    />
}

const Style = StyleSheet.create({});

export default EditScreen;