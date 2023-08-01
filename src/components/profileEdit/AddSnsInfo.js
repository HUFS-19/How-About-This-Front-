import React, { useState } from 'react';

import '../../styles/components/profileEdit/_AddSnsInfo.scss';

import kakao from '../../assets/icon/kakao.svg';
import { PiInstagramLogoFill as instagram } from 'react-icons/pi';

import youtube from '../../assets/icon/youtube.svg';
import facebook from '../../assets/icon/facebook.svg';
import email from '../../assets/icon/email.svg';
import blog from '../../assets/icon/blog.png';

const AddSnsInfo = ({ snsData }) => {
  const [snsOptionOpen, setSnsOption] = useState(false);
  const [selectedSns, selectSns] = useState(false);

  const sns = {
    카카오톡: kakao,
    인스타그램: instagram,
    유튜브: youtube,
    페이스북: facebook,
    이메일: email,
    블로그: blog,
  };

  return (
    <div className='AddSnsInfo'>
      <div className='snsIco-container'>
        {snsData.map((data) => (
          <li>
            {/* react-icon으로 변경 필요 */}
            <img
              src={sns[data.snsTYPE]}
              alt=''
              onClick={() => {
                selectSns({ sns: data.snsTYPE, link: data.snsLINK });
              }}
            />
          </li>
        ))}
        <div className='slctNewSns-section'>
          <img
            src={youtube}
            alt=''
            className='snsListCntr'
            onClick={() => {
              setSnsOption(!snsOptionOpen);
            }}
          />
          {/* react-icon으로 변경 필요 */}

          <ul className={snsOptionOpen ? 'snsList-open' : 'snsList-close'}>
            <li>
              <img src={youtube} alt='' />
            </li>
            <li>
              <img src={youtube} alt='' />
            </li>
            <li>
              <img src={youtube} alt='' />
            </li>
            <li>
              <img src={youtube} alt='' />
            </li>
          </ul>
        </div>
      </div>
      <div className={selectedSns ? 'snsEdit-open' : 'snsEdit-close'}>
        <img src={sns[selectedSns.sns]} alt='' />
        <input type='text' name='sns' value={selectedSns.link} />
        <button>확인</button>
      </div>
    </div>
  );
};
export default AddSnsInfo;
