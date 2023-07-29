import React, { useState } from 'react';
import '../../styles/components/profileEdit/_AddSnsInfo.scss';

import kakao from '../../assets/icon/kakao.svg';
import instagram from '../../assets/icon/instagram.svg';
import youtube from '../../assets/icon/youtube.svg';
import facebook from '../../assets/icon/facebook.svg';
import email from '../../assets/icon/email.svg';
import blog from '../../assets/icon/blog.png';

const AddSnsInfo = ({ snsData }) => {
  const [snsOptionOpen, setSnsOption] = useState(false);
  const [selectedSns, selectSns] = useState(false);

  const sns = {
    kakao: kakao,
    instagram: instagram,
    youtube: youtube,
    facebook: facebook,
    email: email,
    blog: blog,
  };

  return (
    <div className='AddSnsInfo'>
      <div className='snsIco-container'>
        {snsData.map((data) => (
          <li>
            {/* react-icon으로 변경 필요 */}
            <img
              src={sns[data]}
              alt=''
              onClick={() => {
                selectSns(data);
              }}
            />
          </li>
        ))}
        <div className='slctNewSns-section'>
          <img
            src={instagram}
            alt=''
            className='snsListCntr'
            onClick={() => {
              setSnsOption(!snsOptionOpen);
            }}
          />
          {/* react-icon으로 변경 필요 */}

          <ul className={snsOptionOpen ? 'snsList-open' : 'snsList-close'}>
            <li>
              <img src={instagram} alt='' />
            </li>
            <li>
              <img src={instagram} alt='' />
            </li>
            <li>
              <img src={instagram} alt='' />
            </li>
            <li>
              <img src={instagram} alt='' />
            </li>
          </ul>
        </div>
      </div>
      <div className={selectedSns ? 'snsEdit-open' : 'snsEdit-close'}>
        <img src={sns[selectedSns]} alt='' />
        <input type='text' />
        <button>확인</button>
      </div>
    </div>
  );
};
export default AddSnsInfo;
