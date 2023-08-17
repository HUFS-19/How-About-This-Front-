import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Upload from './Upload';

const Edit = () => {
  const id = useParams().id;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      axios.get(`http://localhost:5000/product/${id}`).then((res) => {
        setTitle(res.data[0].prodNAME);
        setDescription(res.data[0].detail);
        setLink(res.data[0].link);
        setCategory(res.data[0].cateID);
      });

      axios.get(`http://localhost:5000/product/${id}/tags`).then((res) => {
        setTags(res.data.map((tag) => tag.tagNAME));
      });

      axios.get(`http://localhost:5000/product/${id}/imgs`).then((res) => {
        setImages(res.data.map((img) => img.imgID));
      });
    };

    getProduct();
  }, [id]);

  return (
    <div className='Edit'>
      <Upload
        isEdit={true}
        product={{ title, description, link, category, tags, images }}
        productId={id}
      />
    </div>
  );
};

export default Edit;
