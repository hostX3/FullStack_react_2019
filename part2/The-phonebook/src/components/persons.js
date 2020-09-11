import React from "react";

const Persons = ({persons,deletePerson}) => {
  return persons.map((item) => {
    return (
      <Person
        key={item.id}
        id={item.id}
        person={item.name}
        phone={item.phone}
        deletePerson={deletePerson}
      />
    );
  });
};

const Person = ({deletePerson, person,id,phone}) => {
  return (
    <>
      <div className="person">
        <p>Name: </p> {person.toUpperCase()} <p>phone: </p>{phone.toUpperCase()}
        
        <button onClick={deletePerson(person, id)}>Delete</button>
      </div>
    </>
  );
};

export default Persons;
