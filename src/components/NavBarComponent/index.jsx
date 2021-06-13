import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import './styles.css'
import { CartWidget } from '../cartComponent';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <img src="/images/logo.png" alt="Panalera Store" />
                <Navbar.Brand href="#home">Panalera Store</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link>Profile</Nav.Link>
                <Nav.Link>Products</Nav.Link>
                < CartWidget />
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
    </>
    )
}