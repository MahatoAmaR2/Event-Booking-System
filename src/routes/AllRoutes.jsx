import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import CreateEvent from "../components/event/CreateEvent";
import BookEvent from "../components/event/BookEvent";
import Events from "../components/event/Events";
import Host from "../pages/Host";
import Footer from "../components/footer/Footer";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/create" element={<CreateEvent/>}/>
        <Route path="/event/book" element={<BookEvent/>}/>
        <Route path="/event/events" element={<Events/>}/>
        <Route path="/host" element={<Host/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
