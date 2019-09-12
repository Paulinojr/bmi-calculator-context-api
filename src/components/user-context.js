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
    weight: 60,
    height: 1.60,
    imc: 23.4
}