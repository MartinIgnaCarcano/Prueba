import { Button, Card } from "react-bootstrap";
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <div className="titulo">
                <h1>Nuestros Productos</h1>
            </div>
            <div className="cards">

                <Card style={{ width: '18rem' }} className="producto">
                    <Card.Img variant="top" src="/images/brownies.jpeg" />
                    <Card.Body className="texto">
                        <Card.Title>Dulces</Card.Title>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="producto">
                    <Card.Img variant="top" src="/images/raviolesListos.jpeg" />
                    <Card.Body className="texto">
                        <Card.Title>Salados</Card.Title>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="producto">
                    <Card.Img variant="top" src="/images/hero.jpeg" />
                    <Card.Body className="texto">
                        <Card.Title>Promociones</Card.Title>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default AboutUs;