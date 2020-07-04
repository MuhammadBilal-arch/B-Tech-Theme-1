import React from 'react';

export default function Card(props) {
    const data = props.children.card;
    console.log(data)

    return (
        <div className='Scard'>
            {
                data.map((val, ind, currArr) => {
                    return (
                        <div key={val.id} className='cardChild'>
                            <i className = {val.iconsrc}></i>
                            <h1>{val.id}</h1>
                            <div>{val.title}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

