import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlackBtn from './button/BlackBtn';
import WhiteBtn from './button/WhiteBtn';

import '../styles/components/_UserWrapper.scss';

const UserWrapper = () => {
  const [id, setId] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get('http://localhost:5000/user/nav', { withCredentials: true })
        .then((res) => {
          if (res.data.login) {
            setId(res.data.id);
            setIcon(res.data.icon);
            console.log(icon);
          }
        });
    };
    getUser();
  });

  const tryLogout = () => {
    setId('');
    setIcon('');
    axios.get('http://localhost:5000/user/logout', { withCredentials: true });
    window.location.reload();
  };

  if (!id) {
    return (
      <div className='UserWrapper'>
        <Link to='/login'>
          <BlackBtn className='BlackBtn' text={'로그인'} />
        </Link>
        <Link to='/join'>
          <WhiteBtn className='WhiteBtn' text={'회원가입'} />
        </Link>
      </div>
    );
  } else {
    return (
      <div className='UserWrapper'>
        <img className='NavIcon' src={icon}></img>
        <p className='NavId'>{id}</p>
        <BlackBtn className='BlackBtn' text={'로그아웃'} onClick={tryLogout} />
      </div>
    );
  }
};

export default UserWrapper;
