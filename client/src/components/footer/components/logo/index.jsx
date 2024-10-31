import WLogo from "../../../../assets/img/WLogo.png"

const Logo = () => {
  return (
    <div className='flex items-center'>
      <img src={WLogo} alt='Logo' className='h-20 mr-2' />
    </div>
  );
};

export default Logo;
