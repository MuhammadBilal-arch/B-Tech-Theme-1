import React from 'react';

export default function PCard(props) {

    return (
                    <div className='PcardChild'>
                        <h2>{props.head}</h2>
                        <h1>{props.PriceID}</h1>
                        <p>{props.PricePara}</p>
                        <div>{props.List_1}</div>
                        <div>{props.List_2}</div>
                        <div>{props.List_3}</div>
                        <div>{props.List_4}</div>
                        <div>{props.List_5}</div>
                        <button style= {{border: props.B_Border ,
                                         backgroundColor: props.B_Color,
                                         color:props.B_Text_Color
                                         
                                         }}>Choose Pricing</button>
                    </div>
           ) 
}

