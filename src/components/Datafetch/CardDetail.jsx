//  From  data .json how to get it   and  apply to frontend 


import React from 'react'
import Data from "./data.json"

function CardDetail(props) {
    const date = new Date()
    const month = date.getMonth()
    const CurrentYear = date.getFullYear()
    const TodayDate = `${date} : ${month} : ${CurrentYear}`

    return (
        <div className='container'>
            <div>
                <h2 style={{textAlign:"center"}}>{props.title}</h2>
                <p>{props.desc}</p>
                <p>{TodayDate}</p>
            </div>


        </div>
    )
}

export default CardDetail