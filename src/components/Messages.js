import React from 'react';

const Messages = ({ msgArray }) => {
  return (
    <div className='Messages'>
      <ul>
        {msgArray.map((msg) => {
          return <li>{msg}</li>;
        })}
      </ul>
    </div>
  );
};

export default React.memo(Messages);
