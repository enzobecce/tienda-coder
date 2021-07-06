import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import { CartWidget } from '../cartComponent';
import { Link } from 'react-router-dom';
import './styles.css'

export const NavBar = () => {
    return (
      <Navbar className='top' bg="light" variant="light" expand="lg">
        <img src="/images/logo.png" alt="Panalera Store" />
        <Navbar.Brand>
          <Link to={"/"}>Panalera Store</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link">Profile</Link>
            <Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <Link to={`/category/1`}>
                  <NavDropdown.Item>Toys</NavDropdown.Item>
                </Link>
                <Link to={`/category/2`}>
                  <NavDropdown.Item>Hygiene</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to={`/`}>
                  <NavDropdown.Item>View All</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav.Link>
            <CartWidget />
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}