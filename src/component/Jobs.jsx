import { Component, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Detail from "./Detail";
import SingleJob from "./SingleJob";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { addJobsAction } from "../action";

// const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => ({
//   fetchJobs: () => dispatch(addJobsAction()),
// });

// class Jobs extends Component {
const Jobs = ({ fetchJobs, search, setCompany }) => {
  // state = {
  //   // jobs: [],
  //   oneJob: null,
  // };
  const [oneJob, setOneJob] = useState(null);
  const jobs = useSelector((state) => state.vacancies.jobs);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(addJobsAction());
  }, []);

  // componentDidMount = async () => {
  //   this.props.fetchJobs();
  // try { // this is commented out because am fatching muy jobs in my redx(action)
  //   console.log("search prop:", this.props.search);
  //   const response = await fetch(
  //     "https://strive-jobs-api.herokuapp.com/jobs?limit=10"
  //     // `https://strive-jobs-api.herokuapp.com/jobs?title=${this.props.search}`
  //   );
  //   if (response.ok) {
  //     const res = await response.json();
  //     console.log(res.data);
  //     this.setState({
  //       jobs: res.data,
  //     });
  //   } else {
  //     console.log(`Errorrrrr`);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  // };

  // render() {
  // const { jobs } = this.props;
  // console.log("redux prop :", this.props.vacancies.jobs);
  console.log("redux prop :", jobs);
  return (
    <Container>
      <Row>
        <Col sm={5}>
          {
            //this.props.vacancies.jobs
            jobs
              .filter((job) =>
                // job.title.toLowerCase().includes(this.props.search)
                job.title.toLowerCase().includes(search)
              )
              .map((job) => (
                <SingleJob
                  key={job._id}
                  job={job}
                  // setCompany={this.props.setCompany}
                  setCompany={setCompany}
                  // company={(name) => this.setState({ oneJob: name })}
                  company={(name) => setOneJob(name)}
                />
              ))
              .slice(0, 10)
          }
        </Col>
        <Col sm={7}>
          {/* {this.state.oneJob ? ( */}
          {oneJob ? (
            // <Detail job={this.state.oneJob} />
            <Detail job={oneJob} />
          ) : (
            <h3>Select the Job you like from the left📜</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
  // }
};
// export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
export default Jobs;
