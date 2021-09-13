import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Detail extends Component {
  state = {};

  render() {
    const { job } = this.props;
    return (
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>Company Name: {job.company_name}</Card.Text>
          <Card.Text>Location: {job.candidate_required_location}</Card.Text>
          <Card.Text>Salary Range: {job.salary}</Card.Text>
          <Card.Text>Job Type: {job.job_type}</Card.Text>
          <Button
            variant="primary"
            onClick={() =>
              this.props.history.push(`/company/${job.company_name}`)
            }
          >
            {job.company_name} jobs
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default withRouter(Detail);
