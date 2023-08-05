import '../../styles/components/button/_BlackBtn.scss';

const BlackBtn = ({ onClick, goToLink, id, text }) => {
  return (
    <button
      onClick={goToLink ? () => window.open(goToLink) : onClick}
      id={id}
      className='BlackBtn'
    >
      {text}
    </button>
  );
};

export default BlackBtn;
