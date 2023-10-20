import React, { useState } from 'react'

function TodoInput({ addPost }) {
  const [title, setTitle] = useState("")
  const inputChangeHandler = (e) => {
    setTitle(e.target.value);
  }
  const submitHandler = (e) => addPost(title);

  return (
    <React.Fragment>
        <input
        className="input"
        onChange={inputChangeHandler}
      />
      <button onClick={submitHandler}>등록</button>
    </React.Fragment>
  )
}

export default TodoInput