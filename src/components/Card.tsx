import React from 'react'

interface cardProps {
    icon: string;
    text: string;
    color: string;
    size: string;
}

function Card(props: cardProps) {
  return (
    <div className={`Card ${props.size} text-white p-6`} style={{backgroundColor:props.color}}>
        <div className="icon">
            <img src={props.icon} alt="Card Icon" />
        </div>
        <h3 className="font-bold text-2xl">{props.text}</h3>
    </div>
  )
    
}

export default Card