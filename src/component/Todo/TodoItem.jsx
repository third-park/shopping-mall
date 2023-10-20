import React from 'react'
import Modal from "../Modal"

function TodoItem({ post, index, addLikes, onModal}) {
  const likesHandler = (event) => {
    event.stopPropagation()
    addLikes(post)
  }

  const modalHandler = (event) => onModal(post)


  return (
    <React.Fragment>
      <div className="list" key={index} onClick={modalHandler}>
        <h4>
          {post.title}
          <span onClick={likesHandler}>👍</span>
          {post.likes}
        </h4>
        <p>10월 4일 발생</p>
        <button>삭제</button>

        {post.modal ? <Modal post={post}></Modal> : null}
      </div>
    </React.Fragment>
  )
}

export default TodoItem