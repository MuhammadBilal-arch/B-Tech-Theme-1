import React from 'react'
import "./Footer.css"
import FooterCard from "./FooterCard"
import {Link} from 'react-router-dom';
export default function Footer() {
    const dataFooter = 
    {
        cardcode: 
        [
            {
                head: "Explore",
                item_1:"Cookies",
                item_2:"About",
                item_3:"Privacy Policy",
                item_4:"Licenses"
            },
            {
                head: "Important",
                item_1:"Timeline",
                item_2:"News",
                item_3:"Licensing",
                item_4:"Insight"
            },
            {
                head: "Categories",
                item_1:"Strategy",
                item_2:"Term & Conditions",
                item_3:"Services",
                item_4:"FAQ"
            }
        ]
    } 
    return (
        <section className="FooterPage">    
        <div className="FooterPage_Sect_1">
            <div className="FooterPage_Sect_1_Div">
                <h1>B-Tech</h1>
                <p>We can make website that will work according to customer demands.</p>
                <div className = "contacticon">
                            <a href="http://localhost:3000/"><i className = "fa fa-facebook fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-twitter fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-google-plus fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-linkedin fa-1x"></i></a>
                            <a href="http://localhost:3000/"><i className = "fa fa-instagram fa-1x"></i></a>
                </div>                
            </div>
            <FooterCard>{dataFooter}</FooterCard>
        </div>
        <div className="FooterPage_Sect_2">
                <div>Copyright 2020 B-Tech. All rights reserved.</div>
                <ul>
                    <li><Link to ='/' className='LinkPage'>Home</Link></li>
                    <li><Link to ='/about' className='LinkPage'>About</Link></li>
                    <li><Link to ='/services' className='LinkPage'>Services</Link></li>
                    <li><Link to ='/Pricing' className='LinkPage'>Pricing</Link></li>
                    <li><Link to ='/Contact' className='LinkPage'>Contact</Link></li>
                </ul>
        </div>
        </section>
    )
}
