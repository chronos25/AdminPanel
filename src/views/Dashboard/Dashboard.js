import React, { Component } from 'react';
import { 
  Jumbotron,
  Col,
  Row 
} from 'reactstrap'; 
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="8" lg="15">
            <Jumbotron>
                  <h1 className="display-3">Hello, </h1>
                  <p className="Lead">This is a Mentors Portal for performing CRUD operation for Expertron.</p>
                  <hr className="my-2" />
                   
                </Jumbotron>
          </Col>
      </Row>
      </div>
    );
  }
}

export default Dashboard;
