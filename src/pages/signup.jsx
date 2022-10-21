import React from "react";
import "../style/signup.css";
import {
  FormGroup,
  Label,
  Input,
  Form,
  Button,
  Col,
  FormText,
  InputGroup,
  InputGroupText,
  File,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
// import "../img/logo.png";

class signup extends React.Component {
  render() {
    return (
      <>
        <div className="signUp pt-5">Sign Up</div>
        <p></p>
        <div className="form-signUp">
          <Form>
            <FormGroup floating className="group-signUp">
              <Input
                id="exampleFullName"
                name="fullName"
                placeholder="fullName"
                type="fullName"
              />
              <Label for="exampleFullName">Full Name</Label>
            </FormGroup>{" "}
            <FormGroup floating className="group-signUp">
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating className="group-signUp">
              <Input
                id="exampleUsername"
                name="username"
                placeholder="Username"
                type="username"
              />
              <Label for="exampleUsername">Username</Label>
            </FormGroup>{" "}
            <FormGroup floating className="group-signUp">
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <p></p>
            <FormGroup floating className="group-signUp">
              <Input id="exampleBio" name="bio" placeholder="Bio" type="bio" />
              <Label for="exampleBio">Biodata</Label>
            </FormGroup>{" "}
            <button
              onClick={() => this.props.loginUser(this.state)}
              className="submit"
            >
              <NavLink href="/login"> Submit</NavLink>
            </button>
          </Form>
        </div>
      </>
    );
  }
}

export default signup;
