import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css';

const CarouselHome = () => {
    return (
        <Carousel className="carrusel">
            <Carousel.Item interval={5000} className="item">
                <img src="/images/budines.jpeg" alt="" />
                <Carousel.Caption className="texto">
                    <h3>Los productos para celiacos más ricos del país</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000} className="item">
                <img src="/images/lemonPie.jpeg" alt="" />
                <Carousel.Caption className="texto">
                    <h3>Panadería, repostería, congelados y más</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000} className="item">
                <img src="/images/milanesas.jpeg" alt="" />
                <Carousel.Caption className="texto">
                    <h3>TODO sin T.A.C.C.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselHome;