import '../styles/pages/_Login.scss';

const Login = () => {
  return (
    <div className='Container'>
      <div className='LoginContainer'>
        <h2>로그인</h2>
        <h4>아이디</h4>
        <input className='InputBox'></input>
        <h4>비밀번호</h4>
        <input className='InputBox' type='password'></input>
        <div className='Btns'>
          <button className='LoginBtn'>로그인</button>
          <button className='JoinBtn'>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
