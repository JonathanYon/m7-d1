import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class OneJobCompany extends Component {
  state = {};

  render() {
    const { job } = this.props;
    return (
      <Card className=" mr-3 my-3">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>Company Name: {job.company_name}</Card.Text>
          <Card.Text>Location: {job.candidate_required_location}</Card.Text>
          <Card.Text>
            Salary Range: {job.salary ? job.salary : "As company salary policy"}
          </Card.Text>
          <Card.Text>Job Type: {job.job_type}</Card.Text>
          {/* <Button
            variant="primary"
            onClick={() =>
              this.props.history.push(`/company/${job.company_name}`)
            }
          >
            {job.url} Apply Here
          </Button> */}
        </Card.Body>
      </Card>
    );
  }
}
export default OneJobCompany;
