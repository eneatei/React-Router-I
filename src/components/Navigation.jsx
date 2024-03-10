import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GrHomeRounded } from "react-icons/gr";
import { LuContact2 } from "react-icons/lu";
import iconCake from "../assets/img/cake.svg"

const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Nav className="me-auto">
            <Link to="/" className="text-white text-decoration-none ms-3" > <GrHomeRounded /> Home</Link>
            <Link to="/contacto" className="text-white text-decoration-none ms-3"><LuContact2 /> Contacto</Link>
          </Nav>
          <Link href="/home" className="fs-3 text-white text-decoration-none ms-3">
            <img
              src={iconCake}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Happy Cake
          </Link>
      </Container>
    </Navbar>
  )
}

export default Navigation
