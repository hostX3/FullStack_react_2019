import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course.js'
import courses from './coursesdb.js'

const App = ({courses}) => {

    
    return (
        <div>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}


ReactDOM.render(
    <App courses={courses}/>,
    document.getElementById('root')
)