import React from "react";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="mynavbar d-flex justify-content-center">
      <Navbar.Brand href="#" className='logo mr-4'>
        <img
          src="/images/pokeapi.png"
          className="nav-img d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <h2 className="navbar-title ml-3">Find your favourites Pokemons</h2>
    </Navbar>
  );
}

export default NavBar;
