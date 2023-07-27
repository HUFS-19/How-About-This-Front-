import '../../styles/components/profile/_ProfileArea.scss';
import ProfileProdList from './ProfileProdList';
import UserProfile from './UserProfile';

const ProfileArea = () => {
  return (
    <div className='ProfileArea'>
      <div className='Profile-wrapper'>
        <UserProfile />
        <button className='addProductBtn'>신규 상품 추가</button>
        <ProfileProdList></ProfileProdList>
      </div>
    </div>
  );
};

export default ProfileArea;
