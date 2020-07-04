import React from 'react'
import "./Services.css"
import ServiceCard from "./ServiceCard"


export default function Services() {
    const data = {
        card:
        [
            {
                iconsrc: "fa fa-file-code-o fa-2x",
                id: "HTML & CSS",
                title: 'We will provide services related to html & Css according to customer requirement.'
            },
            {
                iconsrc: "fa fa-file-code-o fa-2x",
                id: "JavaScript",
                title: 'We will provide services related to JavaScript according to customer requirement.'
            },
            {
                iconsrc: "fa fa-file-code-o fa-2x",
                id: "React.js",
                title: 'We will provide services related to ReactJs according to customer requirement.'
            },        
            {
                iconsrc: "fa fa-file-code-o fa-2x",
                id: "Node.js",
                title: 'We will provide services related to Node.js according to customer requirement.'
            }        

        ]
    }    
    return (
        <section className="ServicesPage">
            <div className="ServicesPage_Sec">
            <div className="Services_Section_1_Div1">
            <span>To compliment your ideas</span>
            <h1>Services we can provide</h1>
            </div>
            <div className="Services_Section_1_Div2">
                <ServiceCard>{data}</ServiceCard>
            </div>
            <div className="Services_Section_1_Div3">
                <div className="Services_Section_1_Div3_1">
                    <i class="fa fa-play fa-3x"></i>
                    <div>Video introduction presentation</div>
                    <span>To compliment your ideas</span>
                </div>
            </div>
            </div>
        </section>
    )
}
