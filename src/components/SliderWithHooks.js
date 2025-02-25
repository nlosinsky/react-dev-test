import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";

function logging() {
  console.log('Log!');
}

const countTotal = (num) => {
  return num + 10;
}

const SliderWithHooks = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImages = useCallback(() => {
    return [
      "https://www.planetware.com/wpimages/2018/12/north-america-cheap-ski-holidays-montana-whitefish-mountain.jpg",
      "https://www.planetware.com/wpimages/2018/12/north-america-cheap-ski-holidays-california-bear-mountain.jpg"
    ]
  }, [slide])

  useEffect(() => {
    document.title = `Slide: ${slide}`;

    window.addEventListener('click', logging);

    return () => {
      window.removeEventListener('click', logging);
    }
  }, [slide])

  function changeSlide(i) {
    setSlide(slide => slide + i)
  }

  function toggleAutoplay() {
    setAutoplay(autoplay => !autoplay);
  }

  const total = useMemo(() => {
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(() => {
    return {
      color: slide > 4 ? 'red' : 'black'
    }
  }, [slide])

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100"
             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
             alt="slide"/>

        <Slide getSomeImages={getSomeImages}/>

        <div className="text-center mt-5">Active slide {slide} <br/> {autoplay.autoplay ? 'auto' : null}</div>

        <div style={style} className="text-center mt-5">Total slides: {total}</div>

        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>-1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>+1
          </button>

          <button
            className="btn btn-primary me-2"
            onClick={toggleAutoplay}>toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  )
}

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages())
  }, [getSomeImages]);

  return (
    <>
      {
        images.map((url, i) => {
          return (
            <img className="d-block w-100"
                 key={i}
                 src={url}
                 alt="slide"/>
          )
        })
      }
    </>
  )
}

export default SliderWithHooks;
