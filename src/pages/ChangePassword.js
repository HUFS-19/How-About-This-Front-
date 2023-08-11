import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/pages/_ChangePassword.scss';
const ChangePassword = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [isLogin, setLogin] = useState(false);
  const [inputs, setInputs] = useState({
    curPW: '',
    newPW: '',
    newPWCheck: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/changePassword/checkUser/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (!res.data.isLogin) {
          alert('잘못된 경로');
          navigate(-1);
        } else {
          setLogin(true);
        }
      });
  }, [userId]);

  const onChangePW = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const tryChangePassword = (e) => {
    console.log(inputs);
    axios
      .put(`http://localhost:5000/changePassword/${userId}`, { inputs })
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            title: '비밀번호 변경이 완료되었습니다.',
            confirmButtonColor: '#000000',
          });
          window.location.replace(`/profile/${userId}`);
        } else {
          Swal.fire({
            title: res.data.msg,
            confirmButtonColor: '#000000',
          });
        }
      });
  };

  if (isLogin) {
    return (
      <div className='ChangePassword'>
        <div className='ChangePassword-container'>
          <h2>비밀번호 변경</h2>

          <h4>현재 비밀번호</h4>
          <input
            className='InputBox'
            name='curPW'
            onChange={onChangePW}
            type='password'
          ></input>
          <h4>새 비밀번호</h4>
          <input
            className='InputBox'
            name='newPW'
            type='password'
            onChange={onChangePW}
          ></input>
          <h4>새 비밀번호 확인</h4>
          <input
            className='InputBox'
            name='newPWCheck'
            type='password'
            onChange={onChangePW}
          ></input>

          <button
            className='PWChangeBtn'
            type='submit'
            onClick={tryChangePassword}
          >
            비밀번호 변경
          </button>
        </div>
      </div>
    );
  }
};

export default ChangePassword;
