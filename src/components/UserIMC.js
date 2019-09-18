import React, { useContext } from 'react'
import {UserContext} from './user-context'
import {RangeInput} from './range-input'

export default function UserIMC(){
    const userContext = useContext(UserContext)
    const {weight, height, setHeight, setWeight, setImc, imc} = userContext

    const handleWeightChange = event => {
        setWeight(event.target.value)

        localStorage.setItem('@calculo-imc/weight', weight)
        
        let imcCalc = (weight / (height * height)).toFixed(1)

        setImc(imcCalc)
    }

    const handleHeightChange = event => {
        setHeight(event.target.value)

        localStorage.setItem('@calculo-imc/height', height)

        let imcCalc = (weight / (height * height)).toFixed(1)

        setImc(imcCalc)

    }
  
    return(
        <div>
            <p>Peso: {weight}kg </p>
            <RangeInput defaultValue={localStorage.getItem('@calculo-imc/weight')} min={20} max={200} step={1} onChange={handleWeightChange}></RangeInput>

            <p>Altura: {height}m </p>
            <RangeInput defaultValue ={localStorage.getItem('@calculo-imc/weight')} min={1.20} max={2.00} step={0.01} onChange={handleHeightChange}></RangeInput>

            IMC: {imc}
        </div>        
    )
}