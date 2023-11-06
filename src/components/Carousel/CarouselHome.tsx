import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css';

const CarouselHome = () => {
    return (
        <Carousel className="carrusel">
            <Carousel.Item interval={1000} className="item">
                <img src="/images/hero.jpeg" alt="" />
                <Carousel.Caption className="texto">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500} className="item">
                <img src="/images/milanesas.jpeg" alt="" />
                <Carousel.Caption className="texto">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="item">
                <img src="/images/tartin de dulce de leche.jpeg" alt="" />
                <Carousel.Caption className="texto">
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselHome;