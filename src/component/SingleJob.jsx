import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleJob extends Component {
  state = {};

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Job.title</Card.Title>
          <Card.Text>Job.company_name</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
