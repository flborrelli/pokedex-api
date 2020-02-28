import React from "react";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="mynavbar">
      <Navbar.Brand href="#">
        <img
          src="/images/pokeapi.png"
          className="nav-img d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <h2 className="navbar-title">Find your favourites Pokemons</h2>
    </Navbar>
  );
}

export default NavBar;
