import React from 'react'

export default function ACard(props) {
    return (
        <div className = "AboutDiv">
        <h2>{props.Rno}</h2>
        <span>{props.head}</span>
       </div>
    )
}
