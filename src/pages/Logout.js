import { useEffect, useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log('test');
    axios.post(
      'http://localhost:5000/user/logout',
      {},
      { withCredentials: true },
    );
  });

  return <div></div>;
};

export default Logout;
