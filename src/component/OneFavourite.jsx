import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class OneFavourite extends Component {
  state = {};

  render() {
    const { company } = this.props;

    return (
      <Card className=" mr-3 my-3">
        <Card.Body>
          <Card.Title>{company.company_name}</Card.Title>
          <Card.Text>Company Name: {company.title}</Card.Text>
          <Card.Text>Location: {company.candidate_required_location}</Card.Text>
          <Card.Text>
            Salary Range:{" "}
            {company.salary ? company.salary : "As company salary policy"}
          </Card.Text>
          <Card.Text>Job Type: {company.job_type}</Card.Text>
          <Button variant="primary" onClick={() => company.url}>
            Apply Here
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default OneFavourite;
