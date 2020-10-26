import React from "react";

const Persons = ({persons,deletePerson}) => {
  return persons.map((item) => {
    return (
      <div key={item.id} className="person">
      <p>Name: </p> {item.name} <p>phone: </p>{item.phone}
      
      <button onClick={deletePerson(item.name, item.id)}>Delete</button>
    </div>
    );
  });
};

export default Persons;
