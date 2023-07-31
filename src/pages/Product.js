import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';

import profile from '../assets/profile.jpg';
import '../styles/pages/Product/_Product.scss';

import GreyBtn from '../components/button/GreyBtn';
import WhiteBtn from '../components/button/WhiteBtn';

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [clicked, setClicked] = useState(false);

  const heartIcon = useRef();

  if (heartIcon.current) {
    if (clicked && !heartIcon.current.classList.contains('clicked')) {
      heartIcon.current.classList.add('clicked');
    } else if (!clicked && heartIcon.current.classList.contains('clicked')) {
      heartIcon.current.classList.remove('clicked');
    }
  }

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get(`http://localhost:5000/product/${id}`)
        .then(async (res) => {
          let productInfo = res.data[0];

          await axios
            .get(`http://localhost:5000/product/category/${res.data[0].cateID}`)
            .then((res) => {
              if (res.data === undefined) {
                return;
              }
              setProduct({ cateNAME: res.data[0].cateNAME, ...productInfo });
            });
        });
    };

    getProduct();
  }, []);

  return (
    <div className='Product'>
      <div className='Product-wrapper'>
        <div className='Product-background'>
          <section id='Product-detail'>
            <div className='Product-slider'></div>
            <div className='Product-info'>
              <p id='category'>{product.cateNAME}</p>
              <p id='name'>{product.prodNAME}</p>
              <p id='tags'>
                <span>#태그1</span>
                <span>#태그2</span>
                <span>#태그3</span>
                <span>#태그4</span>
              </p>
              <div id='user-info'>
                <div>
                  <img className='profile' src={profile} alt='' />
                  <span id='username'>{product.userID}</span>
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
