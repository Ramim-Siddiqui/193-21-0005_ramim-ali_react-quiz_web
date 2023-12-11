import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
    <>
    <div className="container bg-white">
      <h1 className='bg-white' style={{paddingTop: '2rem', paddingBottom: '3.5rem'}}>Contact Us</h1>
      <Form className='bg-white'>

        {/* 1st row */}
      <Row className="mb-3">
        <Form.Group className='bg-white' as={Col} controlId="formGridEmail">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control style={{border: '2px solid black'}}type="text" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className='bg-white' as={Col} controlId="formGridPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control style={{border: '2px solid black'}} type="tel" placeholder="Phone" />
        </Form.Group>
      </Row>

{/* 2nd row */}
      <Row className="mb-3 bg-white py-5" >
      <Form.Group className='bg-white' as={Col} controlId="formGridEmail">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control style={{border: '2px solid black'}} type="text" placeholder="Address" />
        </Form.Group>

        <Form.Group className='bg-white'as={Col} controlId="formGridPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control style={{border: '2px solid black'}} type="email" placeholder="Email" />
        </Form.Group>
      </Row>

      {/* description */}

      {/* <Row className="mb-3 bg-white" > */}
      <Form.Group as={Col} controlId="formGridDescription">
        {/* <Form.Label>Description</Form.Label> */}
        <Form.Control
          as="textarea" style={{border: '2px solid black'}}
          placeholder="Description"
          rows={3}
          // You can add additional props or styling here if needed
        />
      </Form.Group>

      {/* </Row> */}
      <div className="text-end bg-white form_btn" >
      <Button className='w-25' variant="success" type="submit">Submit</Button>
      </div>

    </Form>

    </div>
    </>
  )
}

export default Contact;
