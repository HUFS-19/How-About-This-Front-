import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AddSnsInfo from '../components/profileEdit/AddSnsInfo';
import BlackBtn from '../components/button/BlackBtn';
import WhiteBtn from '../components/button/WhiteBtn';
import '../styles/components/profile/_ProfileArea.scss';
import '../styles/components/profileEdit/_ProfileEditArea.scss';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [loadState, setLoad] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [snsList, setSnsList] = useState({});
  const [snsListOrigin, setSnsListOrigin] = useState({});
  const [inputs, setInputs] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [imgData, setImgData] = useState('');
  const imageInput = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profile/${userId}`, { withCredentials: true })
      .then((res) => {
        if (res.data.loginState.id !== userId) {
          alert('잘못된 경로');
          navigate(-1);
        } else {
          setLogin(true);
        }
        setSnsList(res.data.snsList);
        setSnsListOrigin(res.data.snsList);

        setInputs({
          nickname: res.data.profileData.nickname,
          introduce: res.data.profileData.introduce,
        });
        setPreviewImage(res.data.profileData.userIcon);

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
    //유저 아이콘 변경
    if (imgData) {
      const formData = new FormData();
      formData.append('userIcon', imgData, `${userId}.jpg`);

      axios
        .put(
          `http://localhost:5000/profile/update/userIcon/${userId}`,
          formData,
        )
        .then((res) => {});
    }

    //sns 삭제
    const deletedSns = [];
    Object.keys(snsListOrigin).forEach((data) => {
      if (snsList[data] === undefined) {
        deletedSns.push(snsListOrigin[data]);
      }
    });
    if (deletedSns.length !== 0) {
      axios
        .delete(`http://localhost:5000/profile/deleteSns/${userId}`, {
          data: deletedSns,
        })
        .then((res) => {});
    }

    // sns 삽입 및 업데이트
    axios
      .put(`http://localhost:5000/profile/update/${userId}`, {
        snsList,
        inputs,
      })
      .then((res) => {
        if (res.data.success) {
          window.location.replace(`/profile/${userId}`);
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

  if (isLogin && loadState) {
    return (
      <div className='ProfileArea'>
        <div className='Profile-wrapper'>
          <p className='ProfileEdit-title'>프로필 수정</p>
          <div className='changePwBtn'>
            <Link to={`/profile/changePassword/${userId}`}>
              <BlackBtn text={'비밀번호 변경'}></BlackBtn>
            </Link>
          </div>
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
