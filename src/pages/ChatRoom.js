import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { GoChevronLeft } from 'react-icons/go';
import { LiaPaperPlane } from 'react-icons/lia';

import '../styles/pages/_ChatRoom.scss';

const ChatRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductInfo = async () => {
      await axios.get(`http://localhost:5000/product/${id}`).then((res) => {
        setProduct(res.data[0]);
      });
    };

    getProductInfo();
  }, []);

  return (
    <div className='Chatroom'>
      <div className='Chatroom-wrapper'>
        <div className='Chatroom-background'>
          <div className='Chatroom-topbar'>
            <GoChevronLeft
              className='goback-icon'
              onClick={() => navigate(-1)}
            />
            <p className='user-name' onClick={() => {}}>
              {product.userID}
            </p>
            <div></div>
          </div>
          <div className='Chatroom-chatplace'></div>
          <div className='Chatroom-bottombar'>
            <input
              className='msg-input'
              type='text'
              placeholder='메시지 보내기'
            />
            <LiaPaperPlane className='send-icon' onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
