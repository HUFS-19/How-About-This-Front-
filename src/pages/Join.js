import {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import '../styles/pages/_Join.scss';

const Join = () => {
  const [id, setId] = useState('');
  const [checkId, setCheckId] = useState(false);
  const [idMessage, setIdMessage] = useState('');
  
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const onChangeId = (e) => {
    const idReg = /^[a-zA-Z0-9]*$/;
    setId(e.target.value);
    if (!idReg.test(e.target.value)) {
      setIdMessage('영문자와 숫자만 사용해주세요.')
      setCheckId(false);
    } else if (e.target.value.length < 5 || e.target.value.length >= 12) {
      setIdMessage('5글자 이상 12글자 미만으로 입력해주세요.');
      setCheckId(false);
    } else {
      setIdMessage('');
      setCheckId(true);
    }
  };

  const onChangePassword = (e) => {
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,}$/;
    setPassword(e.target.value);
    if (e.target.value.length < 10) {
      setPasswordMessage('10글자 이상 입력해주세요.');
      setCheckPassword(false);
    } else if (!passwordReg.test(e.target.value)) {
      setPasswordMessage('최소 1개의 영문자, 숫자, 특수문자를 포함해주세요.')
      setCheckPassword(false);
    } else {
      setPasswordMessage('');
      setCheckPassword(true);
    }
  };

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChangePasswordConfirm = (e) => {
    if (e.target.value !== password) {
      console.log(e.target.value);
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
      setPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('');
      setPasswordConfirm(true);
    }
  };

  return (
    <div className='Container'>
      <div className='JoinContainer'>
        <h2>회원가입</h2>
        <h4>아이디</h4>
        <div className='IdWrapper'>
          <input className='IdInputBox' onChange={onChangeId}></input>
          <button className='IdCheckBtn' disabled={!(checkId)}>중복확인</button>
        </div>
        <p className='CheckMessage'>{idMessage}</p>
        
        <h4>비밀번호</h4>
        <div className='PasswordWrapper'>
          <input className='PasswordInputBox' type={showPassword ? "text" : "password"} onChange={onChangePassword}></input>
          <button className='ShowPassword' onClick={onShowPassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <p className='CheckMessage'>{passwordMessage}</p>
        
        <h4>비밀번호 확인</h4>
        <input className='InputBox' type='password' onChange={onChangePasswordConfirm}></input>
        <p className='CheckMessage'>{passwordConfirmMessage}</p>

        <button className='JoinBtn' disabled={!(checkId && checkPassword && passwordConfirm)}>가입하기</button>
      </div>
    </div>
  );
};

export default Join;
