import React, { useReducer } from 'react'
// import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const BlogContext = React.createContext();

const blogReducer = (state , action)=>{
  switch (action.type) {
      case 'get_blogposts':
        return action.payload;
      case 'del_blogpost':
        return state.filter(blogPost => blogPost.id !== action.payload);
      // case 'add_blogpost':
      //   return [...state,
      //     { 
      //       id:Math.floor(Math.random()*99999),
      //       // title:`Blog Post #${state.length + 1}`
      //       title:action.payload.title,
      //       content:action.payload.content
      //     }
      //   ]
      case 'edit_blogpost':
        return state.map(blogPost=>{
          return blogPost.id === action.payload.id ? action.payload :blogPost;
         })
      default:
          return state;
  }
}


const getBlogPosts =  (dispatch) =>{
   return async ()=>{
    const response = await jsonServer.get('/blogposts')
   dispatch({type:'get_blogposts',payload:response.data})
 }
}



export const BlogProvider  = ({ children })=>{
//    const blogPosts = [
//        {title:'Blog Posts #1'},
//        {title:'Blog Posts #2'},
//        {title:'Blog Posts #3'}
//    ]
//    const [blogPosts,setBlogPosts] = useState([]);
      //    const addBlogPost = ()=>{
//        setBlogPosts([...blogPosts , {title:`Blog Post #${blogPosts.length + 1 }`}])
//    }
  const [blogPosts,dispatch] = useReducer(blogReducer, []) 

  const addBlogPost = dispatch => {
     return async (title,content,callback)=>{
     await jsonServer.post('/blogposts',{title,content})
    //  dispatch({type:'add_blogpost',payload:{title,content}});  
       if(callback){
       callback();
      }
   } 
 }
  
  const delBlogPost =(dispatch)=>{
    return async id=>{ 
     await jsonServer.delete(`/blogposts/${id}`);
    //  dispatch({type:'del_blogpost', payload: id})
  }
} 

  const editBlogPost =dispatch=>{
  return async (id,title,content,callback)=>{
    await jsonServer.put(`/blogposts/${id}`,{title,content}) 
    dispatch({type:'edit_blogpost' ,payload:{id, title,content}});
    if(callback){
      callback()
    }

  }
 }

    return <BlogContext.Provider value={{data:blogPosts,addBlogPost,delBlogPost,editBlogPost,getBlogPosts}}>
                { children } 
            </BlogContext.Provider>
}

export default BlogContext;