import Header from '../../components/header';
import About from '../../components/about';
import Announcement from '../../components/announcement';
import Events from '../../components/events';
import Blog from '../../components/blog';
import Subscription from '../../components/subscribe';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <>
      <About />
      <Events />
      <Announcement />
      <Blog />
      <Subscription />
      <Footer />
    </>
  );
};

export default Home;
