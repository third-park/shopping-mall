import React from 'react'
import TodoItem from './TodoItem';


function TodoList({ posts, onModal, addLikes}) {
  // const removePost = (selectPost) => {
  //   selectPost.stopPropagation()
  //   const newPost = posts.filter((post, index)=> index !== selectPost);
  //   setPosts(newPost)
  // }

  return (
    <React.Fragment>
      {posts.map((post, index) => <TodoItem key={index} post={post} onModal={onModal} addLikes={addLikes} index={index}/>)}
    </React.Fragment>
  )
}

export default TodoList