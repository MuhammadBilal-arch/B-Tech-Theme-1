import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css";

export default class Nav extends Component {
    render() {
        return (
            <div className='NavBar'>
                <div className="BTech-Logo">B-Tech</div>
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="checkbtn">
                    <i className="fa fa-bars fa-2x"></i>
                </label>
                <ul>
                    <li><Link to='/' className='LinkPage'>Home</Link></li>
                    <li><Link to='/About' className='LinkPage'>About</Link></li>
                    <li><Link to='/services' className='LinkPage'>Services</Link></li>
                    <li><Link to='/Prices' className='LinkPage'>Pricing</Link></li>
                    <li><Link to='/Api' className='LinkPage'>Api</Link></li>
                    <li><Link to='/Contact' className='LinkPage'>Contact</Link></li>
                    <li><Link to='/Purchase' className='LinkPageButton2'>Purchase</Link></li>
                </ul>
            </div>
        )
    }
}


