import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/_ProductBlock.scss';

const ProductBlock = ({ data }) => {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const [mainImg, setMainImg] = useState({});

  const heartIcon = useRef();

  if (heartIcon.current) {
    if (clicked && !heartIcon.current.classList.contains('clicked')) {
      heartIcon.current.classList.add('clicked');
      axios.get(`http://localhost:5000/product/${data.prodID}/like`, {
        withCredentials: true,
      });
      console.log('test');
    } else if (!clicked && heartIcon.current.classList.contains('clicked')) {
      heartIcon.current.classList.remove('clicked');
      axios.delete(`http://localhost:5000/product/${data.prodID}/like`, {
        withCredentials: true,
      });
    }
  }

  useEffect(() => {
    const getMainImg = async () => {
      await axios
        .get(`http://localhost:5000/product/${data.prodID}/imgs`)
        .then((res) => {
          let mainImg = res.data.filter((img) => img.imgOrder === 1);
          setMainImg(mainImg[0]);
        });
    };

    const getLikeState = async () => {
      await axios
        .get(`http://localhost:5000/product/${data.prodID}/likeCheck`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            setClicked(true);
          }
        });
    };

    getMainImg();
    getLikeState();
  }, [data]);

  if (mainImg) {
    return (
      <div className='ProductBlock'>
        <img
          className='product-img'
          src={`http://localhost:5000/${mainImg.img}`}
          alt=''
          onClick={() => navigate(`/product/${data.prodID}`)}
        />
        <FontAwesomeIcon
          ref={heartIcon}
          onClick={() => setClicked(!clicked)}
          className='heart-icon'
          icon={faHeart}
        />
        <p
          className='product-name'
          onClick={() => navigate(`/product/${data.prodID}`)}
        >
          {data.prodNAME}
        </p>
      </div>
    );
  }
};

export default React.memo(ProductBlock);
