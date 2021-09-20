import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class OneJob extends Component {
  render() {
    const { job, index, remove } = this.props;
    console.log("props", this.props);
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
          <Button variant="primary" onClick={() => job.url}>
            Apply Here
          </Button>
          <Button
            className="w-25"
            onClick={() => remove(index)}
            //   onClick={() => removeCompany(company.title)} //removing based on the name of the job but its not efficient
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default OneJob;
