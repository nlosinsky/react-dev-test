import { Tab, Tabs } from "react-bootstrap";

import ClassBasedSlider from "./components/ClassBasedSlider";
import SliderWithHooks from "./components/SliderWithHooks";
import SliderWithReducer from "./components/SliderWithReducer";
import { SliderWithFirstFetch, SliderWithSecondFetch } from "./components/SlidersWithHOC";

import './App.css';

function App() {
  return (
    <Tabs
      defaultActiveKey="classBased"
      id="uncontrolled-tab-example"
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
    </Tabs>
  );
}

export default App;
