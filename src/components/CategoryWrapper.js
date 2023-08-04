import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CategorySetStateContext } from '../App';

import '../styles/components/_CategoryWrapper.scss';

const CategoryWrapper = () => {
  const [categories, setCategories] = useState([]);

  const setCategory = useContext(CategorySetStateContext);

  const clickCategory = (e) => {
    let clickedLi = e.target.closest('li');

    if (clickedLi === null) {
      return;
    }

    setCategory(clickedLi.id);
  };

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get('http://localhost:5000/category/all')
        .then((res) => setCategories(res.data));
    };

    getCategories();
  }, []);

  console.log(categories);

  return (
    <div className='CategoryWrapper' onClick={(e) => clickCategory(e)}>
      <li id='0' className='clicked'>
        전체
      </li>
      <li id='-1'>좋아요 목록</li>
      {categories.map((category) => {
        return (
          <li key={category.cateID} id={category.cateID}>
            {category.cateNAME}
          </li>
        );
      })}
    </div>
  );
};

export default CategoryWrapper;
