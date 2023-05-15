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
          <NavbarBrand href="/" className="mr-auto"><img src='https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png' style={{width: 100, height: 100}}/></NavbarBrand>
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
                <NavLink href="http://localhost:5000/register">Sign Up</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="http://localhost:5000/dashboard">Dashboard</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}