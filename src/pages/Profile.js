import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import '../styles/components/profile/_ProfileArea.scss';
import ProfileProdList from '../components/profile/ProfileProdList';
import UserProfile from '../components/profile/UserProfile';

const Profile = () => {
  const { userId } = useParams();

  const [loadState, setLoad] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [snsData, setSnsData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/profile/${userId}`).then((res) => {
      console.log(res.data);
      setProfileData(res.data[0][0]);
      setSnsData(res.data[1]);
      setLoad(true);
    });
  }, [userId]);

  if (profileData && snsData) {
    return (
      <div className='ProfileArea'>
        <div className='Profile-wrapper'>
          <UserProfile
            profileData={profileData}
            snsData={snsData}
          ></UserProfile>
          <button className='addProductBtn'>신규 상품 추가</button>
          <ProfileProdList userId={userId}></ProfileProdList>
        </div>
      </div>
    );
  } else return null;
};

export default Profile;
