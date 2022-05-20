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
import Footer from './Component/Footer/Footer';
import Donate from './Component/Donate/Donate';
import Events from './Component/OurEvents/Events';
import EventsFullPage from './Component/Home/OurEvents/EventsFullPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/event/:id" element={<EventsFullPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
