import { useEffect, useState } from 'react';
import axios from 'axios';

import ChatRoomBlock from '../components/ChatRoomBlock';

import '../styles/pages/_ChatRoomList.scss';

const ChatRoomList = () => {
  const [chatRoomList, setChatRoomList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/userAPI/checkLogin', {
        withCredentials: true,
      })
      .then((res) => {
        axios
          .get(`http://localhost:5000/userAPI/${res.data.userId}/chatRoomList`)
          .then((res) => {
            res.data.forEach((room) => {
              axios
                .get(
                  `http://localhost:5000/messageAPI/chatroom/${room.chatroomID}/lastMessage`,
                )
                .then((res) => {
                  if (res.data.length > 0) {
                    setChatRoomList((chatRoomList) => [...chatRoomList, room]);
                  }
                });
            });
          });
      });
  }, []);

  return (
    <div className='ChatRoomList'>
      <div className='ChatRoomList-wrapper'>
        <div className='ChatRoomList-background'>
          <div className='ChatroomList-topbar'>
            <p className='topbar-title'>채팅</p>
          </div>
          <section>
            <ul>
              {chatRoomList.map((room) => (
                <ChatRoomBlock room={room} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomList;
