import React, { useState } from 'react'

export default function UserHeight({initialHeight}){
    const [height, setHeight] = useState(initialHeight);
    const handleChange = event => {
        setHeight(event.target.value)
    }
    return(
        <div>
            <p>Altura: {height} m </p>
            <input type="range" min="1.2" max="2" step="0.01" defaultValue ='1.2' onChange={handleChange} />
        </div>        
    )
}