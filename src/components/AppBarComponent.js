import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Food Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="http://localhost:3000/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:3000/calorie">CalorieSearch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:3000/ingredient">IngredientSearch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:3000/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:3000/register">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}