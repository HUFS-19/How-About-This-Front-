import fan from '../assets/fan.png';

import '../styles/components/_ProductBlock.scss';

const ProductBlock = ({ data }) => {
  return (
    <div className='ProductBlock'>
      <img className='product-img' src={fan} alt='' />
      <p className='product-name'>{data.name}</p>
    </div>
  );
};

export default ProductBlock;
