import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';

import { GoChevronLeft } from 'react-icons/go';
import { LiaPaperPlane } from 'react-icons/lia';

import Messages from '../components/Messages';

import '../styles/pages/_ChatRoom.scss';

const ChatRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [input, setInput] = useState('');
  const [msgArray, setMsgArray] = useState([]);

  let socket = io('http://localhost:5000', {
    transports: ['websocket'],
  });
  socket.connect();

  const sendMsg = (e) => {
    if (!input) {
      return;
    }

    if (e.type === 'keydown' && e.key !== 'Enter') {
      return;
    }

    socket.emit('sendMsg', input);
    setInput('');
  };

  socket.on('sendMsg', (msg) => {
    setMsgArray([...msgArray, msg]);
  });

  useEffect(() => {
    const getProductInfo = async () => {
      await axios.get(`http://localhost:5000/product/${id}`).then((res) => {
        setProduct(res.data[0]);
      });
    };

    getProductInfo();
  }, [id]);

  return (
    <div className='Chatroom'>
      <div className='Chatroom-wrapper'>
        <div className='Chatroom-background'>
          <div className='Chatroom-topbar'>
            <GoChevronLeft
              className='goback-icon'
              onClick={() => navigate(-1)}
            />
            <p
              className='user-name'
              onClick={() => navigate(`/profile/${product.userID}`)}
            >
              {product.userID}
            </p>
            <div></div>
          </div>
          <div className='Chatroom-chatplace'>
            <Messages msgArray={msgArray} />
          </div>
          <div className='Chatroom-bottombar'>
            <input
              value={input}
              onKeyDown={(e) => sendMsg(e)}
              onChange={(e) => setInput(e.target.value)}
              className='msg-input'
              type='text'
              placeholder='메시지 보내기'
            />
            <LiaPaperPlane className='send-icon' onClick={sendMsg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
