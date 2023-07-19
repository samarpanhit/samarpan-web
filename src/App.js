import { Route, Routes } from "react-router-dom";
import Contact from "./Component//ContactUs/Contact";
import About from "./Component/AboutUs/About";
import Alumni from "./Component/Alumni/Alumni";
import AlumniDetails from "./Component/Alumni/AlumniDetails";
import Donate from "./Component/Donate/Donate";
import Error from "./Component/ErrorPage/Error";
import Footer from "./Component/Footer/Footer";
import Galery from "./Component/Galery/Galery";
import Home from "./Component/Home/Home";
import EventsFullPage from "./Component/Home/OurEvents/EventsFullPage";
import Navbar from "./Component/Navbar/Navbar";
import Events from "./Component/OurEvents/Events";
import Team from "./Component/Team/Team";
import Test from "./Component/Test";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event">
          <Route index element={<Events />} />
          <Route path=":id" element={<EventsFullPage />} />
          <Route path="/event/:id" element={<EventsFullPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni">
          <Route index element={<Alumni />} />
          <Route path=":year" element={<AlumniDetails />} />
        </Route>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
