import '../../styles/components/button/_GreyBtn.scss';

const GreyBtn = ({ id, text }) => {
  return (
    <button id={id} className='GreyBtn'>
      {text}
    </button>
  );
};

export default GreyBtn;
