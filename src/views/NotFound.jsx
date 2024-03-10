import { Container, Row, Col } from "react-bootstrap";
import { IoAlertCircleOutline } from "react-icons/io5";


const NotFound = () => {
  return (
    <Container className="mt-5">
    <Row className="justify-content-center align-items-center">
      <Col xs={12} className="text-center">
        <h1>404</h1>
        <h2>¡Página no encontrada! <IoAlertCircleOutline /></h2>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
      </Col>
    </Row>
  </Container>
  )
}

export default NotFound