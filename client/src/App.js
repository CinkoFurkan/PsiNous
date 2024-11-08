import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Events from "./pages/events";
import Blog from "./pages/blog";
import Announcement from "./pages/announcement";
import Galery from "./pages/galery";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import MemberDetail from "./pages/memberDetail";
import BlogDetails from "./pages/blog/components/blog-details";
import TeamDetails from "./pages/team/components/team-details";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="w-screen h-auto bg-background">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#b60707",
              color: "#fff",
            },
          },
        }}
      />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ana Sayfa" element={<Home />} />
          <Route path="/biz Kimiz?" element={<About />} />
          <Route path="/ekibimiz/birimlerimiz" element={<Team />} />
          <Route path="/etkinliklerimiz" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/duyurular" element={<Announcement />} />
          <Route path="/galeri" element={<Galery />} />
          <Route path="/İletişim" element={<Contact />} />
          <Route path="/member/:id" element={<MemberDetail />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/Birimlerimiz" element={<TeamDetails />} />
          <Route path="/Hakkımızda" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
