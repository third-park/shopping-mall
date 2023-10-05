import "./App.css";
import { useState } from "react";
import { Modal } from "./component/Modal";

function App() {
  const [title, setTitle] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
  // const [name1, name2, name3] = title;
  
  const [num, setNum] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="nav">
        <h4>블로그그</h4>
      </div>
      {
        title.map((a, i)=>{      
        return(
          <div className="list" key={i}>
          <h4>{ a }<span onClick={() => {
            let copy2 = [...num];
            console.log(copy2);
            copy2[i] = copy2[i] + 1;
            setNum(copy2)
            }}>👍</span>{num[i]}</h4>
          <p>10월 4일 발생</p>
          </div>
          )
        })
      }
      <div className="list">
        <h4>{title[0]}</h4>
        <p>10월 4일 발생</p>
        <button
          type="button"
          onClick={() => {
            let copy = [...title];
            copy[0] = "여자코트 추천";
            setTitle(copy);
          }}>
          변경
        </button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>10월 4일 발생</p>
      </div>
      <div className="list" onClick={ () => setModal(!modal) }>
        <h4>{title[2]}</h4>
        <p>10월 4일 발생</p>
      </div>
      {modal === true ? <Modal></Modal> : null}
    </div>
    
  );
}

export default App;
