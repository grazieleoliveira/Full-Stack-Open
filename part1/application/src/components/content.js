import React from 'react'
import Part from './part'

const Content = (props) => {
    return (
        <div>
            <Part part={props.content.part1} exercises={props.content.exercises1}/>
            <Part part={props.content.part2} exercises={props.content.exercises2}/>
            <Part part={props.content.part3} exercises={props.content.exercises3}/>
         
        </div>
    )
    
}

export default Content
