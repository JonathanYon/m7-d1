import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

class Company extends Component {
  // const Company = () => {
  state = {
    jobs: [],
  };
  //   const params = useParams();
  componentDidMount = async () => {
    try {
      console.log("params ==>", this.props.match.params.name);
      const response = await fetch(
        `https://remotive.io/api/remote-jobs?company_name=${this.props.match.params.name}`
      );
      if (response.ok) {
        const res = await response.json();
        console.log("company ==>", res.jobs);
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
        <h4>Company name: {this.props.match.params.name}</h4>
        <Row>
          {this.state.jobs.map((job, i) => (
            <Col key={i}>{job.title}</Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Company;
