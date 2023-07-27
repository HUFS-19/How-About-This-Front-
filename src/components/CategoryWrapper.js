import { useRef } from 'react';

import '../styles/components/_CategoryWrapper.scss';

const CategoryWrapper = () => {
  const category = useRef();

  return (
    <div
      className='CategoryWrapper'
      ref={category}
      onClick={(e) => console.log(e)}
    >
      <li id='clicked'>전체 목록</li>
      <li>좋아요 목록</li>
      <li>카테고리 1</li>
      <li>카테고리 2</li>
      <li>카테고리 3</li>
      <li>카테고리 4</li>
      <li>카테고리 5</li>
      <li>카테고리 6</li>
    </div>
  );
};

export default CategoryWrapper;
