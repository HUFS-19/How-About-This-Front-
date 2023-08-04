import '../../styles/components/button/_BlackBtn.scss';

const BlackBtn = ({ onClick, id, text }) => {
  return (
    <button
      onClick={onClick ? () => window.open(onClick) : () => {}}
      id={id}
      className='BlackBtn'
    >
      {text}
    </button>
  );
};

export default BlackBtn;
