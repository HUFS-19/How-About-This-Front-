import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/components/_CommentWrapper.scss';

const CommentWrapper = () => {
  const { id } = useParams();
  const [commentData, setCommentData] = useState([]);
  const [userCheck, setUserCheck] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const getComment = async () => {
      await axios
        .get(`http://localhost:5000/comment/${id}`, { withCredentials: true })
        .then((res) => {
          setCommentData(res.data.comments);
          if (res.data.user) {
            setUserCheck(res.data.user.id);
          }
        });
    };
    getComment();
  }, [id, userCheck]);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickAdd = () => {
    axios.post(`http://localhost:5000/comment/${id}`, {
      userID: userCheck,
      content: content,
    });
    setUserCheck('');
  };

  const onClickDelete = (e) => {
    axios.delete(`http://localhost:5000/comment/${e.target.value}`);
    setUserCheck('');
  };

  return (
    <div className='CommentWrapper'>
      <div className='CommentBackground'>
        <p className='commentTitle'>COMMENT</p>

        {userCheck !== '' && (
          <div className='AddComment'>
            <input
              className='commentInput'
              placeholder='댓글을 등록해주세요!'
              onChange={onChangeContent}
            ></input>
            <button className='addBtn' onClick={onClickAdd}>
              등록
            </button>
          </div>
        )}

        {commentData.map((comment) => {
          return (
            <div className='comment'>
              <img
                className='commentIcon'
                src={`http://localhost:5000/${comment.userIcon}`}
                alt=''
              ></img>
              <div className='commentContent'>
                <div className='commentHeader'>
                  <p className='commentNickname'>{comment.nickname}</p>
                  <p className='commentDate'>{comment.date}</p>
                  {userCheck === comment.userID && (
                    <button
                      className='deleteBtn'
                      onClick={onClickDelete}
                      value={comment.commentID}
                    >
                      ×
                    </button>
                  )}
                </div>
                <div className='commentBody'>{comment.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentWrapper;
