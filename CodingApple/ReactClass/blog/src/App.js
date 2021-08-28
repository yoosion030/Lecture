import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,titleRevise] = useState(['곧 방학 끝남', '내일 코로나 검사', '풍암동 맛집']);
  let [like,likeRevise] = useState([0,0,0,0]);
  let [modal,modalRevise] = useState(false);
  let [number,numberRevise] = useState(0);
  let [input,inputRevise] = useState('');

      
  // function changeTitle(){
  //   var newTitle = [...title];
  //   newTitle[0] = '와 신난다'
  //   titleRevise( newTitle );
  // }
  function changeLike(i){
    let newLike = [...like];
    newLike[i]+=1;
    likeRevise(newLike);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      {
        title.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h3 onClick={()=>{numberRevise(i)}}>
              {a}
              <span className="like" onClick = { ()=> {changeLike(i)}}>👍</span>
              {like[i]}
            </h3>
            <p>8월 20일</p>
            <hr />
          </div>
          );
        })
      }

      {/* {input} 
      <input onChange={(e)=>{{inputRevise(e.target.value)}}} /> */}
      <div className="publish">
        <input onChange={(e)=>{{inputRevise(e.target.value)}}} />          
        <button onClick={()=>{
          let addTitle = [...title];
          addTitle.unshift(input);
          titleRevise(addTitle);
          }}>저장</button>
      </div>

      <button onClick = {()=>{modalRevise(!modal)}}>버튼</button>
      {
        modal === true 
        ? <Modal title={title} number={number}></Modal>
        : null
      }
    </div>
  );
}
function Modal(props){
  return(
      <div className="modal">
        <h2>{ props.title[props.number] }</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
  );
}



export default App;
