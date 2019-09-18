import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

export const UserProvider = props => {
    const {
        weight: initialWeight,
        height: initialHeight,
        imc: initialImc,
        children
    } = props

    const [weight, setWeight] = useState(initialWeight)
    const [height, setHeight] = useState(initialHeight)
    const [imc, setImc] = useState(initialImc)

    const userContext = {
        weight,
        height,
        imc,
        setWeight,
        setHeight,
        setImc
    }

    return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export const { UserConsumer } = UserContext


UserProvider.propTypes = {
    weight: Number,
    height: Number,
    imc: Number
}

UserProvider.defaultProps = {
    weight: localStorage.getItem('@calculo-imc/weight') !== undefined ? localStorage.getItem('@calculo-imc/weight') : 60,
    height: localStorage.getItem('@calculo-imc/height') !== undefined ? localStorage.getItem('@calculo-imc/height') : 1.60,
    imc: 0
}

UserProvider.defaultProps.imc = (UserProvider.defaultProps.weight / (UserProvider.defaultProps.height * UserProvider.defaultProps.height)).toFixed(1)