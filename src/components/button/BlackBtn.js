import '../../styles/components/button/_BlackBtn.scss';

const BlackBtn = ({ id, text }) => {
  return (
    <button id={id} className='BlackBtn'>
      {text}
    </button>
  );
};

export default BlackBtn;
