import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/components/button/_BlackBtn.scss';

const BlackBtn = ({ onClick, goToLink, id, text, disabled }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={goToLink ? () => navigate(goToLink) : onClick}
      id={id}
      className='BlackBtn'
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default React.memo(BlackBtn);
