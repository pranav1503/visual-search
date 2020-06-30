import React, { Component } from 'react'
import { NavLink,Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';

export default class Navbar_My extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Searching-Visualization of {this.props.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink className="nav-link" activeClassName="active" as={Link} to="/linear">Linear</NavLink>
                    <NavLink className="nav-link" activeClassName="active" as={Link} to="/binary">Binary</NavLink>                                                                           
                </Nav>  
            </Navbar.Collapse>
            </Navbar> 
            </div>
        )
    }
}
