import React from 'react'

export const RangeInput = props => {
    changeValue (value){
        this.props.onChange(value)
    }
    return (
        <input type="range" min={props.min} max={props.max} step={props.step}  defaultValue={props.defaultValue} onMouseUp={props.handleWeightChange} onTouchEnd={props.handleWeightChange} />
    ) 
}