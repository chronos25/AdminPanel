import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class ListGroups extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
           <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong> Delete Mentor's</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">Caution !</h1>
                    <p className="lead">By clicking this button you delete all document from the database.</p>
                  </Container>
                  <Col md="3">
                  <Button  type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button> 
                    </Col>  
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListGroups;
