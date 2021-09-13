import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Company extends Component {
  state = {};

  // componentDidMount = async () => {
  //   try {
  //     //   const response = await fetch("https://remotive.io/api/remote-jobs");
  //     if (response.ok) {
  //       const res = await response.json();
  //       console.log(res.jobs);
  //       this.setState({
  //         jobs: res.jobs,
  //       });
  //     } else {
  //       console.log(`Errorrrrr`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col>Hello</Col>
        </Row>
      </Container>
    );
  }
}
export default Company;
