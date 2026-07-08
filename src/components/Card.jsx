import React from 'react'
import "./Card.css"

function Card() {
    const  title = "Card Title";
    const  description  = "A card is a versatile, flat, rectangular piece of stiff paper, cardboard, or plastic used to store information, convey messages, or play games. Common physical forms include paper like playing cards, postcards, and greeting cards, or durable plastics for identification and financial transactions."
    const date = new Date()
    const month = date.getMonth()
    const currentYear = date.getFullYear();
  return (
    <div className='container'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Created on {date.toDateString()}:{month}:{currentYear}</p>
    </div>
  )
}
export default Card