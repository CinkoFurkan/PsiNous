import About from "./components/about";
import Announcement from "./components/announcement";
import Events from "./components/events";
import Blog from "./components/blog";
import Subscription from "./components/subscribe";

const Home = () => {
  return (
    <>
      <About />
      <Events />
      <Announcement />
      <Blog />
      <Subscription />
    </>
  );
};

export default Home;
