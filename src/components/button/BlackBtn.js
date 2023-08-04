import '../../styles/components/button/_BlackBtn.scss';

const BlackBtn = ({ onClick, id, text }) => {
  return (
    // <button onClick={() => window.open(onClick)} id={id} className='BlackBtn'>
    <button id={id} className='BlackBtn'>
      {text}
    </button>
  );
};

export default BlackBtn;
