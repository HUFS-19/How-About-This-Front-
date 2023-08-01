import { useEffect } from 'react';
import axios from 'axios';

import ProductBlock from '../ProductBlock';
import '../../styles/components/profile/_ProfileProdList.scss';

const ProfileProdList = ({ userId }) => {
  useEffect(() => {
    axios.get(`http://localhost:5000/product/${userId}`).then((res) => {
      console.log(res.data);
      // console.log('dsfsf');
    });
  }, []);
  const productDummyData = [
    { id: 0, name: '미니 선풍기' },
    { id: 1, name: '강아지 산책 줄' },
    { id: 2, name: '귀요미 인형' },
    { id: 3, name: '무선 충전기' },
    { id: 4, name: 'MP3' },
    { id: 5, name: '립밤' },
    { id: 6, name: '휴대용 컵반' },
    { id: 7, name: 'LED 거울' },
    { id: 8, name: '무한 핸드크림' },
    { id: 9, name: '쓱싹 가위' },
  ];
  return (
    <div className='ProfileProdList'>
      <section className='Profile-ProductList_content'>
        {productDummyData.map((data) => (
          <ProductBlock key={data.id} data={data} />
        ))}
      </section>
    </div>
  );
};
export default ProfileProdList;
