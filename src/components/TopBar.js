import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/_TopBar.scss';

const TopBar = () => {
  return (
    <div className='TopBar'>
      <select className='category-selector'>
        <option value='all'>전체</option>
        <option value='like'>좋아요 목록</option>
        <option value='category1'>카테고리 1</option>
        <option value='category2'>카테고리 2</option>
        <option value='category3'>카테고리 3</option>
        <option value='category4'>카테고리 4</option>
        <option value='category5'>카테고리 5</option>
        <option value='category6'>카테고리 6</option>
      </select>
      <select className='search-selector'>
        <option value='product'>상품명</option>
        <option value='uploader'>작성자명</option>
        <option value='tag'>태그명</option>
      </select>
      <div className='search_wrapper'>
        <FontAwesomeIcon className='search-icon' icon={faSearch} />
        <input
          className='search-bar'
          type='text'
          placeholder='검색어를 입력해주세요'
        />
      </div>
    </div>
  );
};

export default TopBar;
