import { Routes, Route } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Home from "../../pages/home";
import About from "../../pages/home/components/about";
import Team from "../../pages/team";
import Events from "../../pages/home/components/events";
import Blog from "../../pages/blog";
import Announcement from "../../pages/home/components/announcement";
import Contact from "../../pages/contact";
import MemberDetail from "../../pages/memberDetail";
import BlogDetails from "../../pages/blog/components/blog-details";
import TeamDetails from "../../pages/team/components/team-details";

export default function WebLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ana Sayfa" element={<Home />} />
        <Route path="/biz Kimiz?" element={<About />} />
        <Route path="/ekibimiz/birimlerimiz" element={<Team />} />
        <Route path="/etkinliklerimiz" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/duyurular" element={<Announcement />} />
        <Route path="/İletişim" element={<Contact />} />
        <Route path="/member/:id" element={<MemberDetail />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/Birimlerimiz" element={<TeamDetails />} />
        <Route path="/Hakkımızda" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
