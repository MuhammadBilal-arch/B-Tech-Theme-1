import React from 'react'

export default function FooterCard(props) {
    const dataFooter = props.children.cardcode;
    return (
        <div className='Fcard'>
            {
                dataFooter.map((val, ind, currArr) => {
                    return (
                        <div key={val.head} className='FcardChild'>
                            <h2>{val.head}</h2>
                            <div>{val.item_1}</div>
                            <div>{val.item_2}</div>
                            <div>{val.item_3}</div>
                            <div>{val.item_4}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
