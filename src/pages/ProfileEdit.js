import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import AddSnsInfo from '../components/profileEdit/AddSnsInfo';

import '../styles/components/profile/_ProfileArea.scss';
import '../styles/components/profileEdit/_ProfileEditArea.scss';

const ProfileEdit = () => {
  const { userId } = useParams();

  const [loadState, setLoad] = useState(false);
  const [snsList, setSnsList] = useState({});
  const [inputs, setInputs] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [imgData, setImgData] = useState('');
  const imageInput = useRef();

  useEffect(() => {
    axios.get(`http://localhost:5000/profile/${userId}`).then((res) => {
      setSnsList(res.data[1]);

      setInputs({
        nickname: res.data[0].nickname,
        introduce: res.data[0].introduce,
      });
      setPreviewImage(res.data[0].userIcon);

      setLoad(true);
    });
  }, [userId]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clickEditBtn = (e) => {
    const formData = new FormData();

    formData.append('userIcon', imgData, `${userId}.jpg`);

    axios
      .put(`http://localhost:5000/profile/update/${userId}`, {
        snsList,
        inputs,
      })
      .then((res) => {});

    axios
      .put(`http://localhost:5000/profile/update/userIcon/${userId}`, formData)
      .then((res) => {
        if (res.data.success) {
          window.location.replace(`/profile/${userId}`);

          // navigate(`/profile/${userId}`);
        }
      });
  };

  const setUserIcon = (e) => {
    var reader = new FileReader();

    reader.onload = function (e) {
      setPreviewImage(e.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
    setImgData(e.target.files[0]);
  };

  if (loadState) {
    return (
      <div className='ProfileArea'>
        <div className='Profile-wrapper'>
          <p className='ProfileEdit-title'>프로필 수정</p>
          <div className='ProfileEdit-body-container'>
            <div className='userIco-container'>
              <img className='ProfileEdit-userIco' src={previewImage} alt='' />
              <button
                className='img-btn'
                onClick={() => {
                  imageInput.current.click();
                }}
              >
                사진 선택
              </button>
              <input
                className='img-input'
                type='file'
                accept='image/*'
                ref={imageInput}
                onChange={setUserIcon}
                style={{ display: 'None' }}
              ></input>
            </div>
            <div className='ProfileEdit-text-section'>
              <input
                type='text'
                name='nickname'
                className='editNick-input'
                onChange={onChange}
                value={inputs.nickname}
              />
              <textarea
                type='text'
                name='introduce'
                className='editIntro-text'
                onChange={onChange}
                value={inputs.introduce}
              />
              <AddSnsInfo
                snsList={snsList}
                setSnsList={setSnsList}
              ></AddSnsInfo>
            </div>
          </div>
          <div className='Edit-btn-container'>
            <button className='Edit-btn'>수정 취소</button>
            <button className='Edit-btn' onClick={clickEditBtn}>
              수정 완료
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default ProfileEdit;
