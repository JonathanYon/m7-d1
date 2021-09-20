import { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// const mapStateToProps = (state) => state;

// class Home extends Component {
const Home = ({ setSearch, search }) => {
  // render() {
  const totalCompanies = useSelector(
    (state) => state.favorite.companies.length
  );
  return (
    <>
      <h2>Job Search</h2>
      <div className="d-flex">
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            // value={this.props.search}
            value={search}
            onChange={(e) =>
              // this.props.setSearch(e.target.value.toLowerCase())
              setSearch(e.target.value.toLowerCase())
            }
          />
        </InputGroup>
        <Link to="/favourite">
          {/* <Button>{this.props.favorite.companies.length}</Button> */}
          <Button>{totalCompanies}</Button>
        </Link>
      </div>
    </>
  );
  // }
};
// export default connect(mapStateToProps)(Home);
export default Home;
