
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

function NavbarComponent({Count,Total}) {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to="/whale" style={{textDecoration:"none",color:"white"}}>Redux Toolkit</Link></Navbar.Brand>
                    <Nav style={{marginRight:0}}>
                    <Navbar.Brand href="#home"><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></Navbar.Brand>
                    <Navbar.Brand href="#home"><Link to="/cart" style={{textDecoration:"none",color:"white"}}>Cart</Link></Navbar.Brand>
                    <Navbar.Brand href="#home"><Link to="/cart" style={{textDecoration:"none",color:"white"}}>Total Cart:{Count}</Link></Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;