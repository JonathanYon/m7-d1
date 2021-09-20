import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  theJob: (company) =>
    dispatch({
      type: "ADD_COMPANY",
      payload: company,
    }),
});

class Detail extends Component {
  render() {
    const { job, theJob } = this.props;
    // console.log("jobtore==>", job.job.length);
    return (
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>Company Name: {job.company_name}</Card.Text>
          <Card.Text>Location: {job.candidate_required_location}</Card.Text>
          <Card.Text>Salary Range: {job.salary}</Card.Text>
          <Card.Text>Job Type: {job.job_type}</Card.Text>
          {/* <Card.Text>Job Type: {job.job.length}</Card.Text> */}
          <Button
            variant="primary"
            onClick={() =>
              this.props.history.push(`/company/${job.company_name}`)
            }
          >
            {job.company_name} jobs
          </Button>
          <Button
            variant="primary"
            className="ml-2"
            onClick={() => theJob(job)}
          >
            add to favorite
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
