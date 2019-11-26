import React from 'react'

const Persons = (props) => {

    return (
        props.persons.map((item) => {
            return (
                
                <Person key={item.id} id={item.id} person={item.name} phone={item.phone} delete={props.deletePerson} />
            )
        })
    )
}

const Person = (props) => {
    return (
        <>
        <div className="person">
                <strong>Name: </strong> {props.person} <strong>phone: </strong>{props.phone}<button onClick={props.delete(props.person, props.id)}>Delete</button>
        </div>
            
       </> 
    )
}

export default Persons
