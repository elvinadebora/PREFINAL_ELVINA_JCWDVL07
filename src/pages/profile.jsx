import React from "react";
import Redux from "redux";
import "../style/Profile.css";
// import Card from "../component/card";
import Axios from "axios";
import { API_URL } from "../const/API";
import Card from "../component/Card";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import { Router } from "react-router-dom";

class Profile extends React.Component {
  state = {
    post: [],
  };

  modal = () => {
    this.setState({ modal: !this.state.modal });
  };

  fetchPost = () => {
    Axios.get(`${API_URL}/post`)
      .then((result) => {
        this.setState({ post: result.data });
      })
      .catch(() => {
        alert("terjadi kesalahan di server");
      });
  };

  renderPost = () => {
    return this.state.post.map((val) => {
      console.log(val);
      return <Card postData={val} />;
    });
  };

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    return (
      <div
        className="container-fluid px-0 pb-5 "
        style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
      >
        <div className="container-fluid foto-sampul d-flex align-items-end ">
          <div className="container d-flex">
            <div className="photo-profile rounded-circle ">
              <img
                src="https://images.unsplash.com/photo-1665054983503-a8395f102989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className=" d-flex flex-row username ms-3">
              <h1>Elvina</h1>
              <div className="pt-2 px-3">
                <button
                  onClick={() => this.props.loginUser(this.state)}
                  className="login"
                >
                  <NavLink href="/EditProfile">Edit Profile</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" profile-menu mb-2 shadow-sm">
          <div className="container py-1">
            <Nav>
              <NavItem>
                <NavLink style={{ color: "rgb(31, 95, 31)" }}>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: "rgb(31, 95, 31)" }}>
                  Another Link
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">
                  Disabled Link
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="container">
          <div className="row">{this.renderPost()}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
