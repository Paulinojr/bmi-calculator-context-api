import React, { useState } from 'react'

export default function UserWeight({initialWeight}){
    const [weight, setWeight] = useState(initialWeight);
    const handleChange = event => {
        setWeight(event.target.value)
    }
    return(
        <div>
            <p>Peso: {weight} </p>
            <input type="range" min="20" max="200" step="1"  defaultValue ='20' onChange={handleChange} />
        </div>        
    )
}