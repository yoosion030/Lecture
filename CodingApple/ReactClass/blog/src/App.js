import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,titleRevise] = useState(['곧 방학 끝남', '내일 코로나 검사', '풍암동 맛집']);

  let posts = '풍암동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h1>{title[0]}</h1>
        <p>8월 20일</p>
        <hr />
      </div>
      <div className="list">
        <h1>{title[1]}</h1>
        <p>8월 20일</p>
        <hr />
      </div>
      <div className="list">
        <h1>{title[2]}</h1>
        <p>8월 20일</p>
        <hr />
      </div>
      
    </div>
  );
}

export default App;
