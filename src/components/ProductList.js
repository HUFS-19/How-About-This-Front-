import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { CategoryStateContext } from '../App';

import ProductBlock from '../components/ProductBlock';

import '../styles/components/_ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  const category = useContext(CategoryStateContext);

  useEffect(() => {
    const getProductList = async () => {
      if (parseInt(category) === 0) {
        await axios
          .get('http://localhost:5000/product/all')
          .then((res) => setProductList(res.data));
      } else if (parseInt(category) === -1) {
        await axios
          .get('http://localhost:5000/product/like', { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.alert) {
              setProductList([]);
              Swal.fire({
                title: '로그인이 필요한 서비스입니다',
                confirmButtonColor: '#000000',
              });
              navigate('/login');
            } else {
              setProductList(res.data);
            }
          });
      } else {
        await axios
          .get(`http://localhost:5000/product/category/${parseInt(category)}`)
          .then((res) => setProductList(res.data));
      }
    };

    const getCategoryName = async () => {
      if (parseInt(category) === 0) {
        setCategoryName('전체');
      } else if (parseInt(category) === -1) {
        setCategoryName('좋아요 목록');
      } else {
        await axios
          .get(`http://localhost:5000/category/${parseInt(category)}`)
          .then((res) => {
            setCategoryName(res.data[0].cateNAME);
          });
      }
    };

    getProductList();
    getCategoryName();
  }, [category]);

  return (
    <div className='ProductList'>
      <div className='ProductList-wrapper'>
        <div className='ProductList_topbar'>
          <h1>{categoryName}</h1>
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
