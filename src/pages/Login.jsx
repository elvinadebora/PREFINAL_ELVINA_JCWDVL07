import React from "react";
import "../style/Login.css";
import { FormGroup, Label, Input, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../redux/action/user";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    if (this.props.userGlobal.id) {
      //     // untuk home ("/")
      return <Redirect to="/" />;
    }

    return (
      <div className="pt-5 background-login">
        {/* <nav className="nav-container">
          <div className="nav-nature"> */}
        {/* <img
              src="./foto/na-removebg-preview.png"
              style="width:300px; height:300px;"
            /> */}
        {/* </div>

          <div className="nav-login">
            <input
              type="search"
              name="txtLocation"
              id="idLocation"
              className="nav-location"
              placeholder="Location"
            /> */}

        {/* <input
              className="btn-border"
              style="margin-right: 30px"
              value="SIGN UP"
        //     /> */}
        {/* //   </div> */}
        {/* // </nav> */}

        <div className="page-title pt-1">
          <h2
            className="title-heading pt-2"
            style={{ color: " rgb(31, 95, 31)" }}
          >
            NATURE
          </h2>
          <p className="title-content">
            "Look deep into nature, and then you will understand everything
            better."-Albert Einstein
          </p>
          <div className="form-group">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                onChange={this.inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                onChange={this.inputHandler}
              />
              <p></p>
              <button
                onClick={() => this.props.loginUser(this.state)}
                className="try-free"
              >
                <NavLink href="/home"> Login</NavLink>
              </button>
              <p></p>
              <div>
                <div className="havent-acc">Don't have an account? </div>
                <div className="sign-register">
                  {" "}
                  <NavLink href="/signup">Register now</NavLink>
                </div>
              </div>
            </FormGroup>
          </div>

          <p className="beautiful-place pb-10">Beautiful Places In Indonesia</p>
        </div>
        <p></p>
        <p></p>
        <div className="footer">
          <div className="pulau">Sumatera</div>

          <div className="pulau">Jawa</div>

          <div className="pulau">Bali</div>

          <div className="pulau">Kalimantan</div>

          <div className="pulau">Sulawesi</div>

          <div className="pulau">Papua</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

// untuk kirim function (dalam action)
const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
