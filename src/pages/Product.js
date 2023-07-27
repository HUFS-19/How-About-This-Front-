import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';

import profile from '../assets/profile.jpg';
import '../styles/pages/Product/_Product.scss';

import GreyBtn from '../components/button/GreyBtn';
import WhiteBtn from '../components/button/WhiteBtn';

const productDummyData = [
  { id: 0, name: '미니 선풍기', category: '전자기기' },
  { id: 1, name: '강아지 산책 줄', category: '생활잡화' },
  { id: 2, name: '귀요미 인형', category: '생활잡화' },
  { id: 3, name: '무선 충전기', category: '전자기기' },
  { id: 4, name: 'MP3', category: '전자기기' },
  { id: 5, name: '립밤', category: '뷰티' },
  { id: 6, name: '휴대용 컵반', category: '생활잡화' },
  { id: 7, name: 'LED 거울', category: '데코/소품' },
  { id: 8, name: '무한 핸드크림', category: '뷰티' },
  { id: 9, name: '쓱싹 가위', category: '생활잡화' },
];

const Product = () => {
  const { id } = useParams();

  const [clicked, setClicked] = useState(false);

  const heartIcon = useRef();

  if (heartIcon.current) {
    if (clicked && !heartIcon.current.classList.contains('clicked')) {
      heartIcon.current.classList.add('clicked');
    } else if (!clicked && heartIcon.current.classList.contains('clicked')) {
      heartIcon.current.classList.remove('clicked');
    }
  }

  return (
    <div className='Product'>
      <div className='Product-wrapper'>
        <div className='Product-background'>
          <section id='Product-detail'>
            <div className='Product-slider'></div>
            <div className='Product-info'>
              <p id='category'>{productDummyData[id].category}</p>
              <p id='name'>{productDummyData[id].name}</p>
              <p id='tags'>
                <span>#태그1</span>
                <span>#태그2</span>
                <span>#태그3</span>
                <span>#태그4</span>
              </p>
              <div id='user-info'>
                <div>
                  <img className='profile' src={profile} alt='' />
                  <span id='username'>사용자 이름</span>
                </div>
                <div className='btn-wrapper'>
                  <WhiteBtn id={'btn-dm'} text={'DM'} />
                  <FontAwesomeIcon className='message-icon' icon={faMessage} />
                </div>
              </div>
              <div id='btns'>
                <GreyBtn id={'buy-btn'} text={'구입하기'} />
                <FontAwesomeIcon
                  ref={heartIcon}
                  onClick={() => setClicked(!clicked)}
                  className='heart-icon'
                  icon={faHeart}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
