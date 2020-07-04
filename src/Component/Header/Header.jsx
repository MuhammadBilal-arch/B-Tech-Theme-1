import React from 'react'
import "./Header.css";

export default function Header() {
    return (
        <header>
            <ul>
                <li><i className="fa fa-envelope"></i><span>brand@company.co</span></li>
                <li><i className="fa fa-phone"></i><span>(024) 2 6129847</span></li>
                <li><i className="fa fa-calendar"></i><span>Mon. - Fri. 11AM - 19PM</span></li>
            </ul>
            <div className = "contacticon">
                            <a href="http://localhost:3000/"><i className = "fa fa-facebook fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-twitter fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-google-plus fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-linkedin fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-instagram fa-1x"></i></a>
                            <a href="http://localhost:3000/" className = "CI-Search"><i className="fa fa-search"></i></a>
            </div>
        </header>
    )
}
