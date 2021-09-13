import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Company from "./Company";
import SingleJob from "./SingleJob";

class Jobs extends Component {
  state = {
    jobs: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch("https://remotive.io/api/remote-jobs");
      if (response.ok) {
        const res = await response.json();
        console.log(res.jobs);
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
          <Col sm={5}>
            {this.state.jobs
              .map((job) => <SingleJob key={job.id} job={job} />)
              .slice(0, 10)}
          </Col>
          <Col sm={7}>
            <Company />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Jobs;
