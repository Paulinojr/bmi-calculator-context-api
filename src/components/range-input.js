import React from 'react'


export const RangeInput = props => {
    
    return (
        <input type="range" min={props.min} max={props.max} step={props.step}  defaultValue={props.defaultValue} onChange={props.onChange} onMouseUp={props.onChange} onTouchEnd={props.onChange} />
    ) 
}