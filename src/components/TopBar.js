import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/_TopBar.scss';

const TopBar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get('http://localhost:5000/category/all')
        .then((res) => setCategory(res.data));
    };

    getCategories();
  }, []);

  return (
    <div className='TopBar'>
      <select className='category-selector'>
        <option value='all'>전체</option>
        <option value='like'>좋아요 목록</option>
        {category.map((category) => {
          return <option value={category.cateID}>{category.cateNAME}</option>;
        })}
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
