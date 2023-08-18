import React from 'react';

import { motion } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';

import WhiteBtn from '../components/button/WhiteBtn';
import BlackBtn from '../components/button/BlackBtn';

import '../styles/components/_Modal.scss';

const modal = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Modal = ({ className, btnFunc1, btnFunc2 }) => {
  return (
    <div className='Modal-wrapper'>
      <motion.ul
        className='modal'
        variants={modal}
        initial='hidden'
        animate='visible'
      >
        {className === 'delete-modal' && (
          <>
            <FaTrashAlt className='delete-icon' />
            <p>정말 삭제하시겠습니까?</p>
            <div className='btns'>
              <WhiteBtn text='취소' onClick={() => btnFunc1(false)} />
              <BlackBtn text='삭제' onClick={btnFunc2} />
            </div>
          </>
        )}
      </motion.ul>
    </div>
  );
};

export default React.memo(Modal);
