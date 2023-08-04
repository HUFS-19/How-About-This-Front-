import { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/components/_CategoryWrapper.scss';

const CategoryWrapper = () => {
  const [categories, setCategories] = useState([]);

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
    <div className='CategoryWrapper' onClick={(e) => console.log(e)}>
      <li id='clicked'>전체</li>
      <li>좋아요 목록</li>
      {categories.map((category) => {
        return <li key={category.cateID}>{category.cateNAME}</li>;
      })}
    </div>
  );
};

export default CategoryWrapper;
