import { useState } from 'react';
import './App.css';

function App() {

  let logo = 'SEO BLOG'
  const [postTitle, setPostTitle] = useState(['남자 옷 추천', '여자 옷 추천', '아동 옷 추천']);
  const [goodIcons, setGoodIcons] = useState(0);
  const [post, setPost] = useState(['남자 코트 추천','여자 코트 추천', '아동 코트 추천']);

  const handleChangePost = () => {
    let copy = [...postTitle];
    copy[0] = ('변경할 제목');
    setPostTitle(copy);
    // 좋아요 수 초기화
    setGoodIcons(0);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ fontSize : '16px' }}>{ logo } </h4>
      </div>

      <button onClick={handleChangePost}>
        글 변경
      </button>

      <div className='list'>
        <h4>{postTitle[0]}<span onClick={() => {setGoodIcons(goodIcons + 1 )}}>👍</span> {goodIcons} </h4>
        <p>{post[0]}</p>

        <h4>{postTitle[1]}</h4>
        <p>{post[1]}</p>
        
        <h4>{postTitle[2]}</h4>
        <p>{post[2]}</p>


      </div>

    </div>
  );
}

export default App;
