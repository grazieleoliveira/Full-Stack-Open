import React from 'react'
import Header from './components/header'
import Total from './components/total'
import Content from './components/content'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const contentProps = {
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3,
  }

  return (
    <div>
      <Header course={course}/>      
      <Content content={contentProps}/>
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App