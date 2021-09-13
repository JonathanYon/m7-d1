import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Detail from "./Detail";
import SingleJob from "./SingleJob";

class Jobs extends Component {
  state = {
    jobs: [],
    oneJob: null,
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=10"
      );
      if (response.ok) {
        const res = await response.json();
        console.log(res.data);
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

  //   company = (name) => {
  //     this.setState({
  //       oneJob: name,
  //     });
  //   };

  render() {
    return (
      <Container>
        <Row>
          <Col sm={5}>
            {this.state.jobs
              .filter((job) =>
                job.title.toLowerCase().includes(this.props.search)
              )
              .map((job) => (
                <SingleJob
                  key={job._id}
                  job={job}
                  setCompany={this.props.setCompany}
                  company={(name) => this.setState({ oneJob: name })}
                />
              ))
              .slice(0, 10)}
          </Col>
          <Col sm={7}>
            {this.state.oneJob ? (
              <Detail job={this.state.oneJob} />
            ) : (
              <h3>Select the Job you like from the left📜</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Jobs;
