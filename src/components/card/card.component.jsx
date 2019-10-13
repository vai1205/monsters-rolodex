import React from 'react'
import './card.styles.css'

export const Card = props => {
    const imgUrl = 'https://robohash.org/'+props.monster.id+'?set=set2&size=180x180'    
    return(
        <div className='card-container'>
            <img 
            src={imgUrl}
            alt='monster'
            />    
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
    
        
        
    
