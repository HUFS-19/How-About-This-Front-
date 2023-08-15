import { useState } from 'react';
import '../../styles/components/profile/_UserProfile.scss';
import SnsList from './SnsList';
import SnsModal from './SnsModal';
import WhiteBtn from '../button/WhiteBtn';
import BlackBtn from '../button/BlackBtn';

const UserProfile = ({ profileData, snsData, isLogin }) => {
  // const [modalState, setModalState] = 'false';
  return (
    <div className='Profile-top'>
      {/* <SnsModal /> */}
      <img className='Profile-top-userIcon' src={profileData.userIcon} alt='' />
      <div className='Profile-top-userText'>
        <p>{profileData.nickname}</p>
        <p>{profileData.introduce}</p>
      </div>
      <div className='Profile-top-sns'>
        <div className='profileEdit-btn-wrapper'>
          {isLogin ? (
            <BlackBtn
              id='profileEdit-btn'
              text='수정'
              goToLink={`/profile/edit/${profileData.userID}`}
            />
          ) : null}
        </div>

        <div className='Profile-sns'>
          <SnsList snsData={snsData}></SnsList>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
