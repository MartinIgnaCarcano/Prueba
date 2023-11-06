import {Container, Nav, Navbar } from 'react-bootstrap';

import {useNavigate} from 'react-router-dom';

const Header = () => {

    //Funcion para navegar sin tener que actualizar toda la pagina
    const navigate = useNavigate();

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navigate ('/')}>Michella Sin T.A.C.C.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate ('/')}>Inicio</Nav.Link>
                            <Nav.Link onClick={() => navigate ('/productos')}>Productos</Nav.Link>
                            <Nav.Link onClick={() => navigate ('/contacto')}>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;