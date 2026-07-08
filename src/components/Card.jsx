import React from 'react'
import "./Card.css"

function Card(props) {
    const date = new Date()
    const month = date.getMonth()
    const currentYear = date.getFullYear();
  return (
    <div className='container'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Created on {date.toDateString()}:{month}:{currentYear}</p>
    </div>
  )
}
export default Card