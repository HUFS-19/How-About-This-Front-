import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import LeftNavBar from '../components/LeftNavBar';
import TopBar from '../components/TopBar';
import ProfileEditArea from '../components/profileEdit/ProfileEditArea';

const ProfileEdit = () => {
  useEffect(() => {
    axios.get(`http://localhost:5000/profile/${userId}`).then((res) => {
      console.log(res.data);
      console.log('dsfsf');

      setProfileData(res.data[0][0]);
      setSnsData(res.data[1]);
      setLoad(true);
    });
  }, []);

  const { userId } = useParams();

  const [loadState, setLoad] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [snsData, setSnsData] = useState({});

  if (loadState) {
    return (
      <div>
        <ProfileEditArea
          profileData={profileData}
          snsData={snsData}
        ></ProfileEditArea>
      </div>
    );
  } else return null;
};

export default ProfileEdit;
