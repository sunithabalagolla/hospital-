import Carousel from 'react-bootstrap/Carousel';
import sunitha from '../../assests/images/cars1.jpg';
import sunitha1 from '../../assests/images/cars2.avif';
import sunitha2 from '../../assests/images/car3.jpg';
import './home.component.css';



export function HomeComponent() {


  return (
    <>
      <Carousel data-bs-theme="blue" className='mt-2'>
        <Carousel.Item>
          <img
            className="d-block slideOne"
            src={sunitha}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slideTwo"
            src={sunitha1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slideThree"
            src={sunitha2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>




    </>
  )
}

