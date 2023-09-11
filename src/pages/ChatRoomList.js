import { useEffect, useState } from 'react';

import { userApi, messageApi } from '../api/API';
import ChatRoomBlock from '../components/ChatRoomBlock';

import '../styles/pages/_ChatRoomList.scss';

const ChatRoomList = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [chatRoomList, setChatRoomList] = useState([]);

  useEffect(() => {
    userApi.checkLogin().then((res) => {
      setLoggedInUser(res.data.userId);
      userApi.getChatRoom(res.data.userId).then((res) => {
        res.data.forEach((room) => {
          messageApi.getLastMsg(room.chatroomID).then((res) => {
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
                <ChatRoomBlock room={room} loggedInUser={loggedInUser} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomList;
