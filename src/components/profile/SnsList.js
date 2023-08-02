import {
  AiFillInstagram as Instagram,
  AiFillYoutube as Youtube,
  AiTwotoneMail as Email,
  AiFillFacebook as Facebook,
  AiOutlinePlusCircle as plus,
} from 'react-icons/ai';
import { FaBloggerB as Blog } from 'react-icons/fa';
import { RiKakaoTalkFill as Kakao } from 'react-icons/ri';

import '../../styles/components/profile/_SnsList.scss';

const SnsList = ({ snsData }) => {
  const sns = {
    카카오톡: <Kakao size={32} color='black' />,
    인스타그램: <Instagram size={31} color='black' />,
    유튜브: <Youtube size={32} color='black' />,
    페이스북: <Facebook size={28} color='black' />,
    이메일: <Email size={28} color='black' />,
    블로그: <Blog size={25} color='black' />,
  };

  return (
    <div className='SnsList'>
      {Object.keys(snsData).map((data) => (
        <li>
          <a href={snsData[data]} target='_blank' rel='noopener noreferrer'>
            {sns[data]}
          </a>
        </li>
      ))}
    </div>
  );
};

export default SnsList;
