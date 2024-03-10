import { Image, Container, Row, Col } from "react-bootstrap"
import cake from "../assets/img/tortarosada.jpg"

const Home = () => {
  return (
    <Container className="mt-5">
    <Row xs={1} md={2} className="align-items-center justify-content-center">
      <Col className="text-center">
        <h1>Bienvenidos a <span className="fw-bold">Happy Cake</span></h1>
        <h5 className="fst-italic">El lugar de los pasteles felices</h5>
      </Col>
      <Col className="text-center">
        <Image src={cake} />
      </Col>
    </Row>
  </Container>
  )
}

export default Home