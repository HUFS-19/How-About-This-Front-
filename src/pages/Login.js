import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import '../styles/pages/_Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onIdHandler = (e) => {
    setId(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const tryLogin = () => {
    axios
      .post(
        'http://localhost:5000/user/login',
        {
          id: id,
          password: password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        if (!res.data.success) {
          console.log(res.data.msg);
        } else {
          console.log('로그인 성공');
          navigate('/');
        }
      });
  };

  return (
    <div className='Container'>
      <div className='LoginContainer'>
        <h2>로그인</h2>
        <h4>아이디</h4>
        <input className='IdInputBox' onChange={onIdHandler}></input>
        <h4>비밀번호</h4>
        <div className='PasswordWrapper'>
          <input
            className='PasswordInputBox'
            type={showPassword ? 'text' : 'password'}
            onChange={onPasswordHandler}
          ></input>
          <button className='ShowPassword' onClick={onShowPassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <div className='LoginBtns'>
          <button
            className='LoginBtn'
            disabled={id.length < 1 || password.length < 1}
            type='submit'
            onClick={tryLogin}
          >
            로그인
          </button>
          <Link to='/join'>
            <button className='JoinBtn'>회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
