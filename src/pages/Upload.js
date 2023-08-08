import { useState, useEffect } from 'react';
import axios from 'axios';

import BlackBtn from '../components/button/BlackBtn';

import '../styles/pages/_Upload.scss';

const Upload = () => {
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  let [tag, setTag] = useState('');
  const [tags, setTags] = useState([]); // 따로 insert 하는 post 만들어줘야 함
  const [link, setLink] = useState('');
  const [shownImages, setShownImages] = useState(['', '', '', '']);
  const [images, setImages] = useState([]);

  const onUploadProduct = async () => {
    await axios
      .post(
        'http://localhost:5000/product/upload',
        {
          cateID: category,
          prodNAME: title,
          detail: description,
          link: link,
        },
        { withCredentials: true },
      )
      .then(async (res) => {
        // console.log(res.data);
        console.log(res.data);

        const formData = new FormData();

        images.forEach((image, i) => {
          formData.append('image', image, i + 1);
        });

        await axios
          .post(
            `http://localhost:5000/product/${title}/upload/image`,
            formData,
            { withCredentials: true },
            {
              header: { 'content-type': 'multipart/form-data' },
            },
          )
          .then((res) => {
            if (res.data) {
              // 작업 성공시 로직
              // console.log(res.data);
            } else {
              console.log('파일을 저장하는데 실패했습니다.');
            }
          });
      });
  };

  const onPushTag = (e) => {
    if (e.key === 'Enter') {
      if (tag === '') {
        return;
      }

      if (tags.includes(tag) || tags.length >= 4) {
        setTag('');
        return;
      }

      if (tag[0] === '#') {
        tag = [...tag].splice(1).join('');
      }

      setTags([...tags, tag]);
      setTag('');
    }
  };

  const onDeleteTag = (e) => {
    let new_tags = tags.filter((tag, i) => i !== parseInt(e.target.id));
    setTags(new_tags);
  };

  const onUploadImage = (e) => {
    const fileArray = e.target.files;

    let temp = ['', '', '', ''];
    let temp2 = [];
    Object.values(fileArray).forEach((file, i) => {
      if (i >= 4) {
        return false;
      }

      const imageUrl = URL.createObjectURL(file);
      temp[i] = imageUrl;
      temp2.push(file);
    });

    setShownImages(temp);
    setImages(temp2);
  };

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
        <div className='Upload-content'>
          <div className='Upload-title'>추천 제품 등록</div>
          <div className='Upload-input-row1'>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='category-selector'
            >
              <option value=''>카테고리</option>
              {categories.map((category) => {
                return (
                  <option key={category.cateID} value={category.cateID}>
                    {category.cateNAME}
                  </option>
                );
              })}
            </select>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='input-title'
              type='text'
              placeholder='제품명을 입력해주세요'
            />
          </div>
          <div className='Upload-input-row2'>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='input-contents'
              cols='30'
              rows='10'
              placeholder='추천하는 제품을 소개해주세요'
            ></textarea>
          </div>
          <div className='Upload-input-row3'>
            <div className='tags'>
              {tags.map((tag, i) => {
                return (
                  <div
                    className='tag'
                    id={i}
                    key={i}
                    onClick={(e) => onDeleteTag(e)}
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyPress={(e) => onPushTag(e)}
              className='input-tags'
              type='text'
              placeholder='제품과 관련된 태그를 입력해주세요 (최대 4개)'
            />
          </div>
          <div className='Upload-input-row4'>
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className='input-link'
              type='text'
              placeholder='제품 구매 링크를 복사 붙여넣기 해주세요'
            />
          </div>
          <div className='Upload-image'>
            <div className='img-wrapper'>
              {shownImages.map((image, i) => {
                return image === '' ? (
                  <div key={i}></div>
                ) : (
                  <div>
                    <img src={image} alt='' />
                  </div>
                );
              })}
            </div>
            <label className='img-upload-label' for='img-upload-btn'>
              <p className='img-upload-btn'>+ 제품 사진 등록</p>
            </label>
            <input
              type='file'
              accept='image/*'
              multiple='multiple'
              id='img-upload-btn'
              onChange={(e) => onUploadImage(e)}
              style={{ display: 'none' }}
            />
          </div>
          <div className='Upload-btn'>
            <BlackBtn onClick={onUploadProduct} text={'작성 완료'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
