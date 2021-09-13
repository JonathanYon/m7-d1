import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import OneJobCompany from "./OneJobCompany";

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
        `https://strive-jobs-api.herokuapp.com/jobs?company=${this.props.match.params.name}`
      );
      if (response.ok) {
        const res = await response.json();
        console.log("company ==>", res.data);
        this.setState({
          jobs: res.data,
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
        <Button onClick={() => this.props.history.push("/")}>Back</Button>
        <h4>Company name: {this.props.match.params.name}</h4>
        <Row>
          {this.state.jobs.map((job, i) => (
            <OneJobCompany key={job._id} job={job} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default Company;
