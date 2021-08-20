import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '풍암동 맛집';
  let style = {
    color:'green',
    fontSize:'30px'
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={style}>개발 Blog</div>
      </div>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
