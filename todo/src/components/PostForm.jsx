import React from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { useState } from 'react';


const PostForm = ({create}) => {
  const [post, setPost1]=useState({title:'', body:''})
  const addNewPost = (e)=>{
    e.preventDefault()
    const newPost = {
      ...post, id:Date.now()
    }
   create(newPost)
    setPost1({title:'', body:''})
   
  }
  return (
    <div>
      <form >
        {/* управляемый инпут */}
        <MyInput 
        value={post.title} 
        onChange = {e=>setPost1({...post, title: e.target.value})}
         type="text" 
         placeholder="Название поста"/>
       
        <MyInput  
        value={post.body} 
        onChange = {e=>setPost1({...post, body: e.target.value})}
        type="text" 
        placeholder="Описание поста"/>
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;