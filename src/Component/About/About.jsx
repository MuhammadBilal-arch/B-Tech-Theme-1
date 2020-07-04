import React from 'react'
import "./About.css"
import AboutCard from "./ACard"

export default function About() {
    return (
        <div className="AboutPage">
            <div className="About_Section_1">
                <div className="About_Section_1_div">
                    <div>About our main company goal</div>
                    <p>Our company started work on projects related to web development, We use latest tools like (Html,Css,JavaScript,ReactJs)</p>
                    <span>
                        <AboutCard Rno="20+" head="Investors" />
                        <AboutCard Rno="15k" head="Projects" />
                    </span>
                </div>
                <div className="About_IMG1">
                    <img src="./About/03.jpg" alt=""></img>
                </div>
            </div>
            <div className="About_Section_2">
                <div className="About_IMG2">
                    <img src="./About/02.jpg" alt=""></img>
                </div>
                <div className="About_Section_2_div">
                    <div>About our websites design</div>
                    <p>Our company started work on projects related to web development, We use latest tools like (Html,Css,JavaScript,ReactJs)</p>
                    <button className="AboutButton">Read more</button>
                </div>
            </div>

        </div>
    )
}

