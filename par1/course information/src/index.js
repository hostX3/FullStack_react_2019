import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const courses = {
    name : 'Half Stack application development',
    parts : [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]}
    
    return (
       
      <div>
          
        <Header  title={courses.name}/>
        
        <Content coursesNames={courses.parts}/>
       
        <Total totals={courses.parts} />
        
       </div>
    )
}

const Header = (props) => { 
    
    return (
        
        <div>
            <h1>Course: {props.title}</h1>
        </div>
        )
    
    
}

const Content = (props) => {
    
    return(
        <div>
            
        <Part _no={"1"} nombres={props.coursesNames[0].name} exercisesNum={props.coursesNames[0].exercises} />
        <Part _no={"2"} nombres={props.coursesNames[1].name} exercisesNum={props.coursesNames[1].exercises} />
        <Part _no={"3"} nombres={props.coursesNames[2].name} exercisesNum={props.coursesNames[2].exercises} />
           
        </div>
    )
}

const Part = (props) => {
  
     return (
         <div> 
             <p>Parte{props._no}: {props.nombres} </p>
 
             <p>ejercicios: {props.exercisesNum}</p>
         </div>
     )
}

const Total = (props) => { 
    
    return(
        <div>
            <h3>Number of exercises: {props.totals[0].exercises + props.totals[1].exercises + props.totals[2].exercises}</h3>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
