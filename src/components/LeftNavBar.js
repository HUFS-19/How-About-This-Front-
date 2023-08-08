import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategorySetStateContext } from '../App';

import UserWrapper from './UserWrapper';
import CategoryWrapper from './CategoryWrapper';

import '../styles/components/_LeftNavBar.scss';

const LeftNavBar = () => {
  const navigate = useNavigate();

  const setCateMain = useContext(CategorySetStateContext);

  const main = () => {
    setCateMain(0);
    navigate('/');
  };

  return (
    <div className='LeftNavBar'>
      <div className='navbar_logo' onClick={main}>
        <p>
          이거<span>?</span>
        </p>
        <hr />
        <p>
          <span>!</span>추천
        </p>
      </div>
      <UserWrapper className='UserWrapper' />
      <CategoryWrapper />
    </div>
  );
};

export default LeftNavBar;
