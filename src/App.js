import { Suspense } from "react";
import { Nav, Spinner } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes, NavLink, Navigate } from "react-router-dom";

import ClassBasedSlider from "./components/ClassBasedSlider";
import SliderWithHooks from "./components/SliderWithHooks";
import SliderWithReducer from "./components/SliderWithReducer";
import ModalWithTransition from "./components/modalWithTransition/ModalWithTransition";
import DonationForm from "./components/donationForm/DonationForm";
import SlidersWithHOC from "./components/SlidersWithHOC";

import './App.css';

function App() {
  return (
    <Router>
      <Nav variant="tabs" className="mb-3">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/class-based">Class Based Slider</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={NavLink} to="/slider-with-hooks">Slider With Hooks</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={NavLink} to="/slider-with-reducer">Slider With Reducer</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={NavLink} to="/sliders-with-hoc">Sliders With HOC</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={NavLink} to="/modal-with-transition">Modal With Transition</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={NavLink} to="/donation-form">Donation Form</Nav.Link>
        </Nav.Item>
      </Nav>

      <main>
        <Suspense fallback={Spinner}>
          <Routes>
            <Route path="/class-based" element={<ClassBasedSlider/>}></Route>
            <Route path="/slider-with-hooks" element={<SliderWithHooks/>}></Route>
            <Route path="/slider-with-reducer" element={<SliderWithReducer initial={false}/>}></Route>
            <Route path="/sliders-with-hoc" element={<SlidersWithHOC/>}></Route>
            <Route path="/modal-with-transition" element={<ModalWithTransition/>}></Route>
            <Route path="/donation-form" element={<DonationForm/>}></Route>
            <Route path="*" element={<Navigate to="/class-based" />}/>
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
