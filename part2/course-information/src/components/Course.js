
import React from 'react'


const Course = ({course}) => {


    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

const Header = ({ course }) =>
    <h1>{course.name}</h1>

const Content = ({course}) => {
    return (
        <div>
            {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

const Part = ({name,exercises}) => <p>{name} {exercises}</p>


const Total = ({course}) => {
    const parts = course.parts.map(course => course.exercises)

    return (
        <b>Total of exercises: {parts.reduce((s, p) => s + p)} </b>
    )
}


export default Course