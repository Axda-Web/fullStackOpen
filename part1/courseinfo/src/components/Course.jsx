import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course: { name, parts}}) => {
  return (
    <>
        <Header name={name} />
        <Content parts={parts} />
        <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </>
  )
}

export default Course