import "../App.css";
import React from "react";

export const Modal = ({ post }) => {
  return (
    <div className="modal">
      <h4>{post.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default Modal;
