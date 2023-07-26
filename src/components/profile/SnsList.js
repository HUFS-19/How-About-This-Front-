import kakao from '../../assets/icon/kakao.svg';
import instagram from '../../assets/icon/instagram.svg';
import youtube from '../../assets/icon/youtube.svg';
import facebook from '../../assets/icon/facebook.svg';
import email from '../../assets/icon/email.svg';
import blog from '../../assets/icon/blog.png';

import '../../styles/components/profile/_SnsList.scss';

const SnsList = ({ snsData }) => {
  console.log(snsData);
  const sns = {
    kakao: kakao,
    instagram: instagram,
    youtube: youtube,
    facebook: facebook,
    email: email,
    blog: blog,
  };
  return (
    <div className="SnsList">
      {snsData.map((data) => (
        <li>
          <img src={sns[data]} alt="" />
        </li>
      ))}
    </div>
  );
};

export default SnsList;
