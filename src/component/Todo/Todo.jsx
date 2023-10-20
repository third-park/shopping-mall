import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Todo() {
  const [posts, setPosts] = useState([
    {
      title: "남자코트 추천",
      likes: 0,
      modal: false,
    },
    {
      title: "강남 우동맛집",
      likes: 0,
      modal: false,
    },
    {
      title: "파이썬 독학",
      likes: 0,
      modal: false,
    },
   ]);

  const addLikes = (selectPost) => {
    const newPost = posts.map(post => post === selectPost ? { ...post, likes: ++post.likes} : post)
    setPosts(newPost)
  }

  const onModal = (selectPost) => {
    const newPost = posts.map(post => post === selectPost ? { ...post, modal: !post.modal} : { ...post, modal: false })
    setPosts(newPost)
  }

  const addPost = (value) => {
    const newPost = {
      title: value,
      likes: 0,
      modal: false
    }
    setPosts(post => post.concat(newPost))
  }

  return (
    <React.Fragment>
      <TodoInput addPost={addPost} />
      <TodoList posts={posts} onModal={onModal} addLikes={addLikes}/>
    </React.Fragment>
  )
}

export default Todo