import React, { useContext } from 'react'
import {UserContext} from './user-context'

export default function UserIMC(){
    const userContext = useContext(UserContext)
    const {weight, height, setHeight, setWeight, setImc, imc} = userContext

    const handleWeightChange = event => {
        setWeight(event.target.value)
        
        let imcCalc = (weight / (height * height)).toFixed(1)

        setImc(imcCalc)
    }

    const handleHeightChange = event => {
        setHeight(event.target.value)

        let imcCalc = (weight / (height * height)).toFixed(1)

        setImc(imcCalc)

    }
  
    return(
        <div>
            <p>Peso: {weight}kg </p>
            <input type="range" min="20" max="200" step="1"  defaultValue="60" onChange={handleWeightChange} onMouseUp={handleWeightChange} onTouchEnd={handleWeightChange} />

            <p>Altura: {height}m </p>
            <input type="range" min="1.20" max="2.00" step="0.01" defaultValue ="1.60" onChange={handleHeightChange} onMouseUp={handleHeightChange} onTouchEnd={handleHeightChange} />

            IMC: {imc}
        </div>        
    )
}