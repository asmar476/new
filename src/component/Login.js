import React from 'react';
import '../App.css';
import 'rsuite/dist/rsuite.min.css'
import { Grid, Row, Col } from 'rsuite';
import { Form, ButtonToolbar, Button} from 'rsuite';
function Login() {
  return (
    <>
     <Grid fluid>
    <Row className="show-grid">
      <Col xsHidden xs={12}>
        <div className='background-img'></div>
      </Col>
      <Col xs={12}>
      <Form>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
      </Col>
    </Row>
  </Grid>
   
    </>
  );
}
export default Login;
