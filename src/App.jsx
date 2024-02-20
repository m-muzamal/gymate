import "./App.css";
import Nav from "./pages/Nav/Nav";
import Contact from "./components/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Classes from "./components/Classes/Classes";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Schedule from "./components/Scheduale/Schedule";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Plane from "./components/Plane/Plane";
import PlanPage from "./pages/PlanPage/PlanPage";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myPlan/:id" element={<Plane />} />
          <Route path="/week/:id" element={<PlanPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
