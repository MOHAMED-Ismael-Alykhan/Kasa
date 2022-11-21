import LogoImg from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return <img src={LogoImg} alt="logo de Kasa" onClick={() => navigate('/')} />;
};

export default Logo;
