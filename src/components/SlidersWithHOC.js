import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const withSlider = (BaseComponent, getData) => {
  return (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false)

    useEffect(() => {
      setSlide(getData());
    }, [])

    function changeSlide(i) {
      setSlide(slide => slide + i);
    }

    function changeAutoplay(value) {
      setAutoplay(value)
    }

    return <BaseComponent {...props}
                          slide={slide}
                          autoplay={autoplay}
                          changeSlide={changeSlide}
                          changeAutoplay={changeAutoplay}
    />;
  }
}

const SliderFirst = (props) => {

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100"
             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
             alt="slide"/>
        <div className="text-center mt-5">Active slide {props.slide}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}>-1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}>+1
          </button>
        </div>
      </div>
    </Container>
  )
}

const SliderSecond = (props) => {

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100"
             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
             alt="slide"/>
        <div className="text-center mt-5">Active slide {props.slide} <br/>{props.autoplay ? 'auto' : null} </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}>-1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}>+1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeAutoplay(autoplay => !autoplay)}>toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  )
}

const getDataFromFirstFetch = () => {
  return 10
};
const getDataFromSecondFetch = () => {
  return 20
};

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

const SlidersWithHOC = () => {
  return (
    <>
      <SliderWithFirstFetch/>
      <hr/>
      <SliderWithSecondFetch/>
    </>
  )
}

export default SlidersWithHOC;
