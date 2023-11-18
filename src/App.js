import { useState } from 'react';
import './App.css';

function App() {

  let logo = 'SEO BLOG'
  const [postTitle, setPostTitle] = useState(['다. 남자 옷 추천', '나. 여자 옷 추천', '가. 아동 옷 추천']);
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

      <div className='button-group'>

        <button className='login-btn' onClick={() => {alert('로그인 버튼 클릭')}}>로그인</button>
        <button className='sign-in-btn' onClick={() => {alert('회원가입 버튼 클릭')}}>회원가입</button>

      </div>

    </div>

      <button onClick={() => {
        let copy = [...postTitle];
        copy.sort();
        setPostTitle(copy);
      }}>
      가나다순 정렬
      </button>

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

      <Modal />

    </div>
  );
}

function Modal() {

  return(
  <> 
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  </>
  )
  
}

export default App;
