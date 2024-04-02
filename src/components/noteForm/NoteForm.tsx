import { Col, Form, Row, Stack } from "react-bootstrap";

export default function NoteFrom() {
  return <Form>
    <Stack >
      <Row>
        <Col>
          <Form.Group >
              <Form.Label>Title</Form.Label>
              <Form.Control required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group >
              <Form.Label>Tags</Form.Label>
              <Form.Select required />
          </Form.Group>
        </Col>
      </Row>


    </Stack>


  </Form>;
}
