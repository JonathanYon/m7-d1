import { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <>
        <h2>Job Search</h2>
        <div className="d-flex">
          <InputGroup className="mb-3 w-50 mx-auto">
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button>Search</Button>
        </div>
      </>
    );
  }
}
export default Home;
