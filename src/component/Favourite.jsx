import { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import OneFavourite from "./OneFavourite";

const mapStateToProps = (state) => ({
  company: state.favorite.companies,
});

class OneJobCompany extends Component {
  state = {};

  render() {
    const { company } = this.props;

    return (
      <>
        <Container>
          <Button onClick={() => this.props.history.push("/")}>Back</Button>
          <h4>My Favourite jobs</h4>
          <Row>
            {company.map((one, i) => (
              <OneFavourite company={one} key={i} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default connect(mapStateToProps)(OneJobCompany);
