import React, { Component } from "react";
import { Navbar, Nav, NavItem,  MenuItem, NavDropdown } from "react-bootstrap";// Bootstrap Library
import { Link } from "react-router-dom";
import "./CustomNavbar.css"; // Import the css file foe styling
export default class CustomNavbar extends Component {


  render() {
    return (
      <React.Fragment>
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            {/* Here you can Logo In the navbar Header */}
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {/* Here The Left Nav Item */}
            <Nav pullLeft>
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/"
                to="/"

              >
                Products
              </NavItem>
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/"
                to="/"

              >
                Brands
              </NavItem>
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/"
                to="/"

              >
                Deals
              </NavItem>
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/"
                to="/"

              >
                Services
              </NavItem>
            </Nav>
            {/* Here The Right Nav Item */}
            <Nav pullRight>
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/"
                to="/"

              >
                Accounts
              </NavItem>
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/"
                to="/"

              >
                Recently Viewed
              </NavItem>
              {/* <NavItem
              > */}      
                <NavDropdown eventKey={3} title="Order Status" id="basic-nav-dropdown">
                  <MenuItem eventKey="1" componentClass={Link} href="/" to="/RecentOrders" style={{ backgroundColor: 'lightblue' }}>Delivered Item</MenuItem>
                  <MenuItem eventKey="1" componentClass={Link} href="/" to="/RecentOrder" style={{ backgroundColor: 'lightblue' }}>In Progress Item</MenuItem>
                </NavDropdown>
              {/* </NavItem> */}
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/"
                to="/"

              >
                Saved Items
              </NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
