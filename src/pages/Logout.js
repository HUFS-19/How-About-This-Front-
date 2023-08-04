import { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  useEffect(() => {
    console.log('test');
    axios.get('http://localhost:5000/user/logout', { withCredentials: true });
  });

  return <div></div>;
};

export default Logout;
