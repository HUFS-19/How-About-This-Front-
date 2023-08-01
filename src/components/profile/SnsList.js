import kakao from '../../assets/icon/kakao.svg';
import instagram from '../../assets/icon/instagram.svg';
import youtube from '../../assets/icon/youtube.svg';
import facebook from '../../assets/icon/facebook.svg';
import email from '../../assets/icon/email.svg';
import blog from '../../assets/icon/blog.png';

import '../../styles/components/profile/_SnsList.scss';

const SnsList = ({ snsData }) => {
  const sns = {
    카카오톡: kakao,
    인스타그램: instagram,
    유튜브: youtube,
    페이스북: facebook,
    이메일: email,
    블로그: blog,
  };

  return (
    <div className='SnsList'>
      {snsData.map((data) => (
        <li>
          <a href={data.snsLINK} target='_blank' rel='noopener noreferrer'>
            <img src={sns[data.snsTYPE]} alt='' />
          </a>
        </li>
      ))}
    </div>
  );
};

export default SnsList;
