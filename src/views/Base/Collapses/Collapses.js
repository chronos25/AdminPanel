import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Jumbotron, Row,FormGroup,Label,Input,FormText,Button } from 'reactstrap';


class Collapses extends Component {

  render() {
    return (
      <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i><strong>Mentor</strong>
              <small> Get Mentor by ID</small>
            </CardHeader>
            <CardBody>
              <Jumbotron fluid>
                <Container fluid>
                  <h4> Get Mentor By Id </h4>
                  <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input"> Mentor's ID</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder=" Mentor's Id" />
                    <FormText color="muted">Enter Mentor's Id</FormText>
                  </Col>
                  <Col md="3">
                <Button  type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button> 
                  </Col>  </FormGroup>
             </Container>
              </Jumbotron>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>      );
  }
}

export default Collapses;
