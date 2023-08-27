import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';

import { GoChevronLeft } from 'react-icons/go';
import { LiaPaperPlane } from 'react-icons/lia';
import Swal from 'sweetalert2';

import Messages from '../components/Messages';

import '../styles/pages/_ChatRoom.scss';

const ChatRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const inquirerId = searchParams.get('inquirer');

  const [product, setProduct] = useState({});
  const [input, setInput] = useState('');
  const [msgArray, setMsgArray] = useState([]);

  let socket = io('http://localhost:5000', {
    transports: ['websocket'],
  });
  socket.connect();

  const sendMsg = async (e) => {
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
    const checkLoggedIn = async () => {
      try {
        await axios
          .get('http://localhost:5000/user/checkLogin', {
            withCredentials: true,
          })
          .then((res) => {
            if (!res.data.login) {
              Swal.fire({
                title: '로그인이 필요한 서비스입니다.',
                confirmButtonColor: '#000000',
              });
              navigate(-1);
              return;
            }
          });
      } catch (error) {
        console.log(error);
      }
    };

    const getProductInfo = async () => {
      await axios.get(`http://localhost:5000/product/${id}`).then((res) => {
        setProduct(res.data[0]);
      });
    };

    const getChatRoom = async () => {
      await axios
        .get(`http://localhost:5000/product/${id}/chat/${inquirerId}`)
        .then(async (res) => {
          console.log('res', res.data);
          if (res.data.length === 0) {
            // 새로운 채팅창 만들기
            await axios
              .post(`http://localhost:5000/product/${id}/chat/${inquirerId}`)
              .then((res) => {
                console.log(res);
              });
            return;
          }

          // 기존 채팅창에서 예전 메시지 가져오기
        });
    };

    checkLoggedIn();
    getProductInfo();
    getChatRoom();
  }, [id, inquirerId, navigate]);

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
