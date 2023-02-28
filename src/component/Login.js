import React,  { useState }  from 'react';
import '../App.css';
import 'rsuite/dist/rsuite.min.css'
import { Grid, Row, Col } from 'rsuite';
import { Form, ButtonToolbar, Button} from 'rsuite';
import { useSearch } from 'rsuite/esm/Picker';
function Login() {
  const [value1, setVale1] = useState(true);
  const [value2, setVale2] = useState(false);

  return (
    <>
     {/* <Grid fluid>
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
  </Grid> */}
  <button type='button' onClick={() => setVale1(value1)} style={{margin: "20px"}}>abc</button>
  <button type='button' onClick={() => setVale2(value2)}>xyz</button>
  <p>Value One: {value1 ? true && <h1>abc</h1> : value2 ? true && <h1>xyz</h1> : true}</p>
   
    </>
  );
}
export default Login;
