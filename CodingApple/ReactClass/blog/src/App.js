import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

  function App() {

    let [title,titleRevise] = useState(['곧 방학 끝남', '내일 코로나 검사', '풍암동 맛집']);
    let [like,likeRevise] = useState(0);
    let [modal,modalRevise] = useState(false);
    let onOff = false;
    
    function changeTitle(){
      var newTitle = [...title];
      newTitle[0] = '와 신난다'
      titleRevise( newTitle );
    }

    return (
      <div className="App">
        <div className="black-nav">
          <div>개발 Blog</div>
        </div>
        <div className="list">
          <h3>
            {title[0]} 
            <span className="like" 
                onClick = { ()=> {
                likeRevise(like+1);
            }}>👍</span>
            {like}
          </h3>
          <p>8월 20일</p>
          <hr />
        </div>
        <div className="list">
          <h3>{title[1]} <span>👍</span></h3>
          <p>8월 20일</p>
          <hr />
        </div>
        <div className="list">
          <h3>{title[2]}</h3>
          <p>8월 20일</p>
          <hr />
        </div>

        <button onClick = {()=>{modalRevise(!modal)}}>버튼</button>

        {
          modal === true 
          ? <Modal></Modal>
          : null
        }
      </div>
    );
  }
  function Modal(){
    return(
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세 내용</p>
        </div>
    );
  }


export default App;
