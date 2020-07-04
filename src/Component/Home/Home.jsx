import React from 'react'
import "./Home.css"
import HomeCard from "./HCard";

export default function Home() {
    return (
        <div className="HomePage"> 
            <div className="HomePageDiv1">
                <span>Compliment your ideas with</span>
                <p>Perfect Business template</p>
                <div className="HomePageDiv2">
                <HomeCard isrc="fa fa-mobile fa-3x" heading="01.Mobile ready" para="We can make responsive website that can work on smart phone."/>
                <HomeCard isrc="fa fa-edit fa-2x" heading="02.Customizable" para="We can make website that will work according to customer demands."/>
                <HomeCard isrc="fa fa-shopping-cart fa-2x" heading="03.Affordable" para="We gave our services at affordable prices."/>
                </div>
            </div>
        </div>
 )
}

