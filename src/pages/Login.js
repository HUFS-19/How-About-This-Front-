import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/_Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onIdHandler = (e) => {
    setId(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='Container'>
      <div className='LoginContainer'>
        <h2>로그인</h2>
        <h4>아이디</h4>
        <input className='InputBox' onChange={onIdHandler}></input>
        <h4>비밀번호</h4>
        <input className='InputBox' type='password' onChange={onPasswordHandler}></input>
        <div className='LoginBtns'>
          <button className='LoginBtn' disabled={id.length < 1 || password.length < 1}>로그인</button>
          <Link to="/join">
            <button className='JoinBtn'>회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
