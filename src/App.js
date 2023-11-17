import { useState } from 'react';
import './App.css';

function App() {
  let logo = 'SEO BLOG'
  const [postTitle, setPostTitle] = useState(['남자 옷 추천', '여자 옷 추천', '아동 옷 추천']);



  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize : '16px' }}>{ logo } </h4>
      </div>

      <div className='list'>
        <h4>{postTitle[0]}</h4>
        <p>남자 코트</p>

        <h4>{postTitle[1]}</h4>
        <p>여자 코트</p>
        
        <h4>{postTitle[2]}</h4>
        <p>아동 코트</p>

        {postTitle.map((title, index) => (
          <div key={index}>
            <h4>{title}</h4>
            {/* 여기에 각 글에 대한 추가 내용을 렌더링할 수 있습니다. */}
            <p>내용</p>
          </div>
        ))}
      </div>

    

    </div>
  );
}

export default App;
