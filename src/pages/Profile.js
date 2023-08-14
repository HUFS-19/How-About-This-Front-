import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/components/profile/_ProfileArea.scss';
import ProfileProdList from '../components/profile/ProfileProdList';
import UserProfile from '../components/profile/UserProfile';

const Profile = () => {
  const { userId } = useParams();

  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({});
  const [snsData, setSnsData] = useState({});
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profile/${userId}`, { withCredentials: true })
      .then((res) => {
        setProfileData(res.data.profileData);
        setSnsData(res.data.snsList);
        if (res.data.loginState.id === userId) {
          setLogin(true);
        }
      });
  }, [userId]);

  if (profileData && snsData) {
    return (
      <div className='ProfileArea'>
        <div className='Profile-wrapper'>
          <UserProfile
            profileData={profileData}
            snsData={snsData}
            isLogin={isLogin}
          ></UserProfile>

          {isLogin ? (
            <button
              className='addProductBtn'
              onClick={() => navigate('/upload')}
            >
              신규 상품 추가
            </button>
          ) : (
            <hr />
          )}
          <ProfileProdList userId={userId}></ProfileProdList>
        </div>
      </div>
    );
  } else return null;
};

export default Profile;
