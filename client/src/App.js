import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Events from './pages/events';
import Blog from './pages/blog';
import Announcement from './pages/announcement';
import Galery from './pages/galery';
import Contact from './pages/contact';
import Footer from './components/footer';

export default function App() {
  return (
    <div className='w-screen h-auto bg-background'>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Ana Sayfa' element={<Home />} />
          <Route path='/biz Kimiz?' element={<About />} />
          <Route path='/ekibimiz/birimlerimiz' element={<Team />} />
          <Route path='/etkinliklerimiz' element={<Events />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/duyurular' element={<Announcement />} />
          <Route path='/galeri' element={<Galery />} />
          <Route path='/İletişim' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
