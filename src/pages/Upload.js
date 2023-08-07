import { useState, useEffect } from 'react';
import axios from 'axios';

import BlackBtn from '../components/button/BlackBtn';
import WhiteBtn from '../components/button/WhiteBtn';

import '../styles/pages/_Upload.scss';

const Upload = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get('http://localhost:5000/category/all')
        .then((res) => setCategories(res.data));
    };

    getCategories();
  }, []);
  return (
    <div className='Upload'>
      <div className='Upload-wrapper'>
        <section className='Upload-content'>
          <div className='Upload-title'>판매글 작성</div>
          <div className='Upload-input-row1'>
            <select className='category-selector'>
              <option value=''>카테고리</option>
              {categories.map((category) => {
                return (
                  <option key={category.cateID} value={category.cateNAME}>
                    {category.cateNAME}
                  </option>
                );
              })}
            </select>
            <input
              className='input-title'
              type='text'
              placeholder='제목을 입력해주세요'
            />
          </div>
          <div className='Upload-input-row2'>
            <textarea
              className='input-contents'
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='물품 소개를 입력해주세요'
            ></textarea>
          </div>
          <div className='Upload-input-row3'>
            <input
              className='input-tags'
              type='text'
              placeholder='태그를 입력해주세요(최대 4개)'
            />
          </div>
          <div className='Upload-image'>
            <div className='img-wrapper'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='img-btn-wrapper'>
              <WhiteBtn id={'img-upload-btn'} text={'사진 등록'} />
            </div>
          </div>
          <div className='Upload-btn'>
            <BlackBtn text={'작성 완료'} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Upload;
