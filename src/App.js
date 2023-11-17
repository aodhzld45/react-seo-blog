import { useState } from 'react';
import './App.css';

function App() {

  let logo = 'SEO BLOG'
  const [postTitle, setPostTitle] = useState(['남자 옷 추천', '여자 옷 추천', '아동 옷 추천']);
  const [goodIcons, setGoodIcons] = useState(0);

  const handleGoodClick = (e) => {
    setGoodIcons(goodIcons => goodIcons + 1);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize : '16px' }}>{ logo } </h4>
      </div>

      <div className='list'>
        <h4>{postTitle[0]}<span onClick={handleGoodClick}>👍</span> {goodIcons} </h4>
        <p>남자 코트</p>

        <h4>{postTitle[1]}</h4>
        <p>여자 코트</p>
        
        <h4>{postTitle[2]}</h4>
        <p>아동 코트</p>


      </div>

    </div>
  );
}

export default App;
