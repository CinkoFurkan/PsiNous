import useFetch from '../../hooks/get';
import TranslateButton from './translateButton';
import Links from './links';
import Logo from './logo';
import Social from './social';

const Header = () => {
  const { data: links } = useFetch('psinous_app/api/link/');

  return (
    <header className="flex w-full items-center justify-between py-4 px-12 text-black shadow-lg rounded-lg">
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
