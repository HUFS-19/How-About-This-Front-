import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
        src={`http://localhost:5000/src/Mimg/${data.prodID}.jpg`}
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
};

export default ProductBlock;
