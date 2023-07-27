import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import fan from '../assets/fan.png';
import doll from '../assets/doll.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/_ProductBlock.scss';

const ProductBlock = ({ data }) => {
  const navigate = useNavigate();

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
    <div className='ProductBlock'>
      <img
        className='product-img'
        src={data.id % 2 === 0 ? fan : doll}
        alt=''
        onClick={() => navigate(`/product/${data.id}`)}
      />
      <FontAwesomeIcon
        ref={heartIcon}
        onClick={() => setClicked(!clicked)}
        className='heart-icon'
        icon={faHeart}
      />
      <p
        className='product-name'
        onClick={() => navigate(`/product/${data.id}`)}
      >
        {data.name}
      </p>
    </div>
  );
};

export default ProductBlock;
