import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Jobs extends Component {
  state = {
    jobs: [],
  };

  componentDidMount = async () => {
    try {
      // const response = await fetch("https://remotive.io/api/remote-jobs")
      if (response.ok) {
        const res = await response.json();
        this.setState({
          jobs: res.jobs,
        });
      } else {
        console.log(`Errorrrrr`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm={5}>Hello</Col>
          <Col sm={7}>Supp</Col>
        </Row>
      </Container>
    );
  }
}
