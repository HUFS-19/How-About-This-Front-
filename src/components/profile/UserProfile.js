import '../../styles/components/profile/_UserProfile.scss';
import userIcon from '../../assets/profile.jpg';
import SnsList from './SnsList';

const UserProfile = () => {
  const snsData = ['instagram', 'youtube', 'facebook', 'email'];
  const user = {
    nickname: '김땡땡',
    introduce: '안녕하세요, 김땡땡의 귀여운 상점입니다!',
  };

  return (
    <div className="Profile-top">
      <img className="Profile-top-userIcon" src={userIcon} alt="" />
      <div className="Profile-top-userText">
        <p className="Profile-nickname">{user.nickname}</p>
        <p className="Profile-inst">{user.introduce}</p>
      </div>
      <div className="Profile-top-sns">
        <button className="profile-edit-btn">수정</button>
        <div className="Profile-sns">
          <SnsList snsData={snsData} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
