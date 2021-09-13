import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleJob extends Component {
  //   state = {
  //     job: this.props.job,
  //   };

  //   componentDidUpdate = (prevProps) => {
  //     if (prevProps.job !== this.props.job) {
  //       this.setState({
  //         job: this.props.job,
  //       });
  //     }
  //   };

  render() {
    const { job, company } = this.props;
    return (
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Link to={`/company/${job.company_name}`}>
            <Card.Text>{job.company_name}</Card.Text>
          </Link>
          <Button variant="primary" onClick={() => company(job)}>
            Job Info
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleJob;
