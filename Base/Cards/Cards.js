import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Mentor's Details
              </CardHeader>
              <CardBody>
                  <Row>
                  <Card>
                    <CardHeader>Mentor's Id</CardHeader>
                    <CardBody>2</CardBody>
                  </Card>
                  <Card>
                    <CardHeader>Mentor's Name</CardHeader>
                    <CardBody>Ritik Raj Srivastava</CardBody>
                  </Card> 
                          <Card>
                          <CardHeader>Task Id</CardHeader>
                          <CardBody>1</CardBody>
                        </Card>

                          <Card>
                          <CardHeader>Task's Name</CardHeader>
                          <CardBody>Add Money to wallet  </CardBody>
                        </Card> 
                  <Card>
                        <CardHeader>Task Assigned Date</CardHeader>
                        <CardBody> 25 Feb 2020</CardBody>
                      </Card>

                      <Card>
                           <CardHeader>Task Submit Date</CardHeader>
                           <CardBody>26 Feb 2020</CardBody>
                      </Card>
                  </Row>
  
              </CardBody>

              <CardFooter>Developed by Ritik Raj</CardFooter>
            </Card>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
