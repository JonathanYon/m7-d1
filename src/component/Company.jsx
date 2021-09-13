import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Company extends Component {
  state = {};

  render() {
    return (
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>job.title</Card.Title>
          <Card.Text>job.company_name</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Company;
