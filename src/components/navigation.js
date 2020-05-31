import React, {Component} from "react";
import { Link, NavLink } from "react-router-dom";

class Navigation extends Component{

    render(){
        return(

         
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Bushirts</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/customers">Customers</NavLink>
                </li>
              </ul>
              
              <button type="button" className="btn btn-primary">
              <i className="fa fa-shopping-cart"></i><span className="badge badge-pill badge-danger" style={ { top: -7} }>{ this.props.cart === 0 ? "" : this.props.cart}</span>
                <span className="sr-only">unread messages</span>
                </button>
            </div>
          </nav>
        )

    }
}

export default Navigation;