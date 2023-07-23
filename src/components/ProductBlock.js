import fan from '../assets/fan.png';
import doll from '../assets/doll.jpeg';

import '../styles/components/_ProductBlock.scss';

const ProductBlock = ({ data }) => {
  return (
    <div className='ProductBlock'>
      <img
        className='product-img'
        src={data.id % 2 === 0 ? fan : doll}
        alt=''
      />
      <p className='product-name'>{data.name}</p>
    </div>
  );
};

export default ProductBlock;
