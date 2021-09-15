import { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import OneJob from "./OneJob";

const mapStateToProps = (state) => ({
  companies: state.favorite.companies,
});

const mapDispatchToProps = (dispatch) => ({
  removeCompany: (company) =>
    dispatch({
      type: "REMOVE_COMPANY",
      payload: company,
    }),
});

class Favorite extends Component {
  render() {
    const { companies } = this.props;

    return (
      <>
        <Container>
          <Button onClick={() => this.props.history.push("/")}>Back</Button>
          <h4>My Favourite jobs</h4>
          <Row>
            {companies.map((company, i) => (
              <OneJob job={company} key={i} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
