import LogoImage from '../../../assets/img/logo.png';

const Logo = () => {
  return (
    <div className="mr-8">
      <img src={LogoImage} alt="Logo" className="h-20 rounded-lg" />
    </div>
  );
};

export default Logo;
