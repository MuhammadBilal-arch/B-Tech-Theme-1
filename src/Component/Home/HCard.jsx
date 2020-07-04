import React from 'react'

export default function HCard(props) {
    return (
        <div className="Hcard">
            <div className="HcardDiv"><i className={props.isrc}></i></div>            
            <h1>{props.heading}</h1>
            <div>{props.para}</div>
        </div>
    )
}
