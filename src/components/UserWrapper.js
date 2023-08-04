import { Link } from 'react-router-dom';
import BlackBtn from './button/BlackBtn';
import WhiteBtn from './button/WhiteBtn';

import '../styles/components/_UserWrapper.scss';

const UserWrapper = () => {
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
};

export default UserWrapper;
