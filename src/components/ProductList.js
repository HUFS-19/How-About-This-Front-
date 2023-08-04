import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CategoryStateContext } from '../App';

import ProductBlock from '../components/ProductBlock';

import '../styles/components/_ProductList.scss';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const category = useContext(CategoryStateContext);

  useEffect(() => {
    const productList = async () => {
      if (parseInt(category) === 0) {
        await axios
          .get('http://localhost:5000/product/all')
          .then((res) => setProductList(res.data));
      } else if (parseInt(category) === -1) {
        return;
      } else {
        await axios
          .get(`http://localhost:5000/product/category/${parseInt(category)}`)
          .then((res) => setProductList(res.data));
      }
    };

    productList();
  }, [category]);

  return (
    <div className='ProductList'>
      <div className='ProductList-wrapper'>
        <div className='ProductList_topbar'>
          <h1>전체 목록</h1>
          <select>
            <option>좋아요순</option>
            <option>최신순</option>
            <option>오래된순</option>
          </select>
        </div>
        <section className='ProductList_content'>
          {productList.map((data) => (
            <ProductBlock key={data.prodID} data={data} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductList;
