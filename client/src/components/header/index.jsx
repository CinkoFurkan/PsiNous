import useFetch from '../../hooks/get';
import TranslateButton from './components/translateButton';
import Links from './components/links';
import Logo from './components/logo';
import Social from './components/social';

const Header = () => {
  const { data: links } = useFetch('/link/');

  return (
    <header className="flex items-center justify-between w-full px-12 py-4 text-black rounded-lg shadow-lg">
      <Logo />
      <Links links={links} />
      <div className="flex items-center space-x-12">
        <Social />
        <TranslateButton />
      </div>
    </header>
  );
};

export default Header;
