import React from 'react';

export default function TestCard(props) {
    const data = props.children;
    console.log(data)
    function OnClickingCard (e)
    {
        e.target.style.display  = "none";
    }

    return (
        <table className='TcardHolder' border = "2" cellPadding= "20">
            {
                <tbody>
                {
                data.map((val, ind, currArr) => 
                {
                    return (
                        <tr key={val.id} className='Tcard' onClick = {OnClickingCard}>
                            <td>{val.id}</td>
                            <td>{val.name || val.employee_name}</td>
                            <td>{val.street || val.employee_salary}</td>
                            <td>{val.city || val.employee_age}</td>
                        </tr>
                    )
                })
                }
                </tbody>
            }
        </table>
    )
}

