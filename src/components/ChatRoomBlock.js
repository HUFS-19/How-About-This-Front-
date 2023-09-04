import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/components/_ChatRoomBlock.scss';

const ChatRoomBlock = ({ room, loggedInUser }) => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState('');
  const [lastMsg, setLastMsg] = useState('');
  const [lastMsgDate, setLastMsgDate] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/productAPI/${room.prodID}`).then((res) => {
      setProductName(res.data[0].prodNAME);
    });

    axios
      .get(
        `http://localhost:5000/messageAPI/chatroom/${room.chatroomID}/lastMessage`,
      )
      .then((res) => {
        setLastMsg(res.data[0].content);

        const DATE = res.data[0].time.slice(0, 10).split('-');
        DATE.splice(1, 0, '년 ');
        DATE.splice(3, 0, '월 ');
        DATE.splice(5, 0, '일 ');

        setLastMsgDate(DATE.join(''));
      });
  }, []);

  return (
    <div
      className='ChatRoomBlock'
      onClick={() =>
        navigate(`/product/${room.prodID}/chat?inquirer=${room.inquirerID}`)
      }
    >
      <div className='ChatRoomBlock-left'>
        <img
          className='inquirer-profile'
          src='http://localhost:5000/src/profile/default.jpg'
          alt=''
        />
        <div className='chatroom-info'>
          <div>
            <p className='chatroom-inquirerId'>
              {loggedInUser === room.inquirerID ? room.userID : room.inquirerID}
            </p>
            <p className='chatroom-productName'>{productName}</p>
          </div>
          <p className='chatroom-lastMsg'>{lastMsg}</p>
        </div>
      </div>
      <div className='ChatRoomBlock-right'>
        <p className='chatroom-lastDate'>{lastMsgDate}</p>
      </div>
    </div>
  );
};

export default React.memo(ChatRoomBlock);
