import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

    
const App = ({courses}) => {
    
    return (
       
      <div>
          
        <Header title={courses.name}/>
        
        <Content coursesNames={courses.parts}/>
       
        <Total parts={courses.parts} />
        
       </div>
    )
}

export default App