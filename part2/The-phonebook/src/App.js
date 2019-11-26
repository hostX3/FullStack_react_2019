import React, { useState,useEffect } from 'react'
import Persons from './components/Persons'
import Notification from "./components/Notification";
import SummitForm from './components/SummitForm'
import Search from './components/Search'
import DB from './services/dbService'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone,setNewPhone] = useState('')
  const [filtered,setFiltered] = useState ([])
  const [errorMessage,setErrorMessage] = useState(null)

  const handleNameChangue = (e) => {
     setNewName(e.target.value);
     console.log(newName)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
    console.log(newPhone)
  }


  const handleSummit = event => {
    event.preventDefault();

    const personObject = {
      name: newName,
      phone: newPhone,
      id: Math.floor(Math.random() * 101)
    };

    if (
      persons.filter(person => person.name === personObject.name).length > 0
    ) {
      if (
        window.confirm(
          `${
          personObject.name
          } this person is already in the phonebook, want to update the phone?`
        )
      ) {
        const previousPerson = persons.find(n => n.name === newName);
        DB
          .update(previousPerson.id, { ...previousPerson, number: newPhone })
          .then(updatedPerson => {
            setPersons(
              persons.map(n => (n.name === newName ? updatedPerson : n))
            );
          })
          .catch(error => {
            console.log(error);
            setErrorMessage("Error during update");
          });
        setPersons(persons.concat(personObject));
        setErrorMessage(`the phone of ${personObject.name}has changed`);
        setNewName("");
        setNewPhone("");
        
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } else {
      DB
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson));
          setErrorMessage(`Added ${personObject.name}`);
          setNewName("");
          setNewPhone("");
          
        })
        .catch(error => {
          setErrorMessage(`${error.response.data.error}`);
          console.log(error.response.data);
        });
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const handleSearch = (e) =>{
    let keyword = e.target.value;
    let filter = persons.filter((item)=>{
      return item.name.indexOf(keyword) > -1
    })

    setFiltered([])
    setFiltered(filter)
    
  }
  const handleDeletePerson = (name, id) => {
    return () => {
      if (window.confirm(`Do you want to delete ${name} ?`)) {
        DB
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== id));
            setErrorMessage(`deleted ${name}`);
           
          })
          .catch(error => {
            console.log(error);
            setPersons(persons.filter(n => n.name !== name));
            setErrorMessage(`the user ${name} has been deleted from the server.`);
          });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    };
  };

 
  useEffect(() => {
    DB.getAll().then(response => {
      console.log(response)
      setPersons(response);
    });
  }, []);

  return (
    <div>
      <Search onSearch={handleSearch}/>
      <Notification message={errorMessage} />
      <h2>Phonebook</h2>
      <SummitForm onFormSummit={handleSummit} onPhonechangue={handlePhoneChange} onNameChangue={handleNameChangue} />
      <h2>persons</h2>
      <Persons persons={filtered.length === 0 ? persons : filtered} deletePerson={handleDeletePerson} ></Persons>
    </div>
  )
}

export default App;
