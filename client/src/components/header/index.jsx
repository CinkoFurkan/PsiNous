import useFetch from '../../hooks/get';
import Links from './links';
import Logo from './logo';
import Social from './social';

const Header = () => {
  const { data: links } = useFetch('psinous_app/api/link/');

  return (
    <header className='flex items-center justify-between p-4 text-black'>
      <Logo />
      <Links />
      <Social />
    </header>
  );
};
export default Header;
