import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import ClassBasedSlider from "./components/ClassBasedSlider";
import SliderWithHooks from "./components/SliderWithHooks";
import SliderWithReducer from "./components/SliderWithReducer";
import { SliderWithFirstFetch, SliderWithSecondFetch } from "./components/SlidersWithHOC";
import ModalWithTransition from "./components/modalWithTransition/ModalWithTransition";
import DonationForm from "./components/donationForm/DonationForm";

import './App.css';

function App() {
  const [key, setKey] = useState('donationForm');

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="classBased" title="Class Based Slider">
        <ClassBasedSlider/>
      </Tab>

      <Tab eventKey="sliderWithHooks" title="Slider With Hooks">
        <SliderWithHooks/>
      </Tab>

      <Tab eventKey="sliderWithRedcucer" title="Slider With Reducer">
        <SliderWithReducer initial={false}/>
      </Tab>

      <Tab eventKey="slidersWithHOC" title="Sliders With HOC">
        <SliderWithFirstFetch/>

        <hr/>

        <SliderWithSecondFetch/>
      </Tab>

      <Tab eventKey="modalWithTransition" title="Modal With Transition">
        <ModalWithTransition />
      </Tab>

      <Tab eventKey="donationForm" title="Donation Form">
        <DonationForm />
      </Tab>
    </Tabs>
  );
}

export default App;
