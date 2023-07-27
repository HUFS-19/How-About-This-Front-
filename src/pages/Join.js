import '../styles/pages/_Join.scss';

const Join = () => {
  return (
    <div className='Container'>
      <div className='JoinContainer'>
        <h2>회원가입</h2>
        <h4>아이디</h4>
        <div className='IdCheck'>
          <input className='IdInputBox'></input>
          <button className='IdCheckBtn'>중복확인</button>
        </div>
        <h4>비밀번호</h4>
        <input className='InputBox' type='password'></input>
        <h4>비밀번호 확인</h4>
        <input className='InputBox' type='password'></input>
        <input className='JoinBtn' type='submit' value={'가입하기'}></input>
      </div>
    </div>
  );
};

export default Join;
