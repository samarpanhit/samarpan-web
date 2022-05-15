import Navbar from './Component/Navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home'
import About from './Component/AboutUs/About';
import Galery from './Component/Galery/Galery';
import Team from './Component/Team/Team';
import Contact from './Component//ContactUs/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
