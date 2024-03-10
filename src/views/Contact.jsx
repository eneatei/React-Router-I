import { Button, Form } from "react-bootstrap"

const Contact = () => {
  return (

    <>
<h2 className="mt-5 text-center">Hola, ¿en qué te podemos ayudar?</h2>
      <Form className="ms-5 me-5 p-5">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>
  </>
  )
}

export default Contact