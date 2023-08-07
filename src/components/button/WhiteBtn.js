import React from 'react';

import '../../styles/components/button/_WhiteBtn.scss';

const WhiteBtn = ({ id, text }) => {
  return (
    <button id={id} className='WhiteBtn'>
      {text}
    </button>
  );
};

export default React.memo(WhiteBtn);
