import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded= "false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>

  <div  className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul  className="navbar-nav mr-auto ">
      <li  className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li  className="nav-item">
        {/*<Link className="nav-link" to="/about">{props.aboutText}</Link>*/}
        <a className="nav-link" href="#">{props.aboutText}</a>
      </li>
      <li  className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div  className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div  className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else where</a>
        </div>
      </li>
      <li  className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form  className= "d-flex">
      <input  className="form-control me-2" type="search" placeholder=" Search" aria-label=" Search"/>
      <button  className="btn btn-primary " type="submit"> Search</button>
    </form>
    <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' :'light'}`}>
      <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype = {
  title:PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'AboutText'
};