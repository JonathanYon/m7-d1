import { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import OneJob from "./OneJob";

// const mapStateToProps = (state) => ({
//   companies: state.favorite.companies,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeCompany: (company) =>
//     dispatch({
//       type: "REMOVE_COMPANY",
//       payload: company,
//     }),
// });

// class Favorite extends Component {
const Favorite = ({ removeCompany, history }) => {
  // render() {
  // const { companies, removeCompany } = this.props;

  const companies = useSelector((state) => state.favorite.companies);

  return (
    <>
      <Container>
        {/* <Button onClick={() => this.props.history.push("/")}>Back</Button> */}
        <Button onClick={() => history.push("/")}>Back</Button>
        <h4>My Favourite jobs</h4>
        <Row>
          {companies.map((company, i) => (
            <div className="d-flex flex-column" key={`key ${i}`}>
              {/* <OneJob job={company} index={i} remove={removeCompany} /> */}
              <OneJob job={company} index={i} />
              {/* <Button
                  className="w-25"
                  onClick={() => removeCompany(i)}
                  //   onClick={() => removeCompany(company.title)} //removing based on the name of the job but its not efficient
                >
                  Remove
                </Button> */}
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
  // }
};
// export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
export default Favorite;
