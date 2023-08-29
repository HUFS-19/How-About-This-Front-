import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { CategoryStateContext, SearchStateContext } from '../App';

import ProductBlock from '../components/ProductBlock';

import '../styles/components/_ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [sort, setSort] = useState('like');

  const category = useContext(CategoryStateContext);
  const search = useContext(SearchStateContext);

  useEffect(() => {
    const getProductList = async () => {
      if (parseInt(category) === -1) {
        await axios
          .get('http://localhost:5000/productAPI/like', {
            withCredentials: true,
          })
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
      } else if (parseInt(category) === -2) {
        console.log(search);
        await axios
          .post('http://localhost:5000/productAPI/search', {
            category: search.category,
            type: search.type,
            search: search.search,
          })
          .then((res) => {
            setProductList(res.data);
          });
      } else {
        await axios
          .post(`http://localhost:5000/productAPI/list`, {
            category: parseInt(category),
            sort: sort,
          })
          .then((res) => setProductList(res.data));
      }
    };

    const getCategoryName = async () => {
      if (parseInt(category) === 0) {
        setCategoryName('전체');
      } else if (parseInt(category) === -1) {
        setCategoryName('좋아요 목록');
      } else if (parseInt(category) === -2) {
        setCategoryName('검색 결과');
      } else {
        await axios
          .get(`http://localhost:5000/categoryAPI/${parseInt(category)}`)
          .then((res) => {
            setCategoryName(res.data[0].cateNAME);
          });
      }
    };

    getProductList();
    getCategoryName();
  }, [category, search, sort]);

  const onChangeSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className='ProductList'>
      <div className='ProductList-wrapper'>
        <div className='ProductList_topbar'>
          <h1>{categoryName}</h1>
          {parseInt(category) !== -1 && (
            <select onChange={onChangeSort}>
              <option value='like'>좋아요순</option>
              <option value='new'>최신순</option>
              <option value='old'>오래된순</option>
            </select>
          )}
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
