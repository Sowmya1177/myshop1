import React, { Component } from "react";
import Navbar from "../CustomNavbar/CustomNavbar";

// here is the home Class where Land the page means its our landing page
export default class Home extends Component {
  render() {
    return (
      <React.Fragment> 
        {/* Import the  component of NAVBAR */}
      <Navbar /> 

      </React.Fragment>
    );
  }
}
