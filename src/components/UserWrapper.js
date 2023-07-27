import GreyBtn from './button/GreyBtn';
import WhiteBtn from './button/WhiteBtn';

import '../styles/components/_UserWrapper.scss';

const UserWrapper = () => {
  return (
    <div className='UserWrapper'>
      <GreyBtn className='GreyBtn' text={'로그인'} />
      <WhiteBtn className='WhiteBtn' text={'회원가입'} />
    </div>
  );
};

export default UserWrapper;
