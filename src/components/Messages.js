import React from 'react';

const Messages = ({ msgArray }) => {
  return (
    <div className='Messages'>
      <ul>
        {msgArray.map((msg, i) => {
          return (
            <li key={i}>
              {msg.senderId}: {msg.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(Messages);
