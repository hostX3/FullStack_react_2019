import React, { useState, useEffect } from 'react'
import Persons from './components/persons'
import Notification from './components/Notification'
import SummitForm from './components/SummitForm'
import Search from './components/Search'
import DB from './services/dbService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filtered, setFiltered] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const handleNameChangue = e => {
    setNewName(e.target.value)
    console.log(newName)
  }

  const handlePhoneChange = e => {
    setNewPhone(Number(e.target.value))
    console.log(newPhone)
  }

  const handleSummit = event => {
    event.preventDefault()
    if (newName === '' || newPhone === '') {
      console.log("Alert: Name or phone can't be empty")
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
      return setErrorMessage({
        message: `Name or phone are missing`,
        type: 'error'
      })
    }


    if (newPhone.length < 10) {
      console.log('Alert: Phone is of invalid lenght')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
      return setErrorMessage({ message: `Phone too short or invalid`, type: 'error' })
    }
    const personObject = {
      name: newName.toLowerCase(),
      phone: newPhone,
      id: Math.floor(Math.random() * 101)
    }

    if (
      persons.filter(person => person.name === personObject.name).length > 0
    ) {
      if (
        window.confirm(
          `${personObject.name} is already in the phonebook, do you want to update the phone?`
        )
      ) {
        const personToUpdateObject = persons.find(n => n.name === newName)
        DB.update(personToUpdateObject.id, {
          ...personToUpdateObject,
          phone: newPhone
        })
          .then(updatedPerson => {
            setPersons(
              persons.map(n => (n.name === newName ? updatedPerson : n))
            )
          })
          .catch(error => {
            console.log(error)
            setErrorMessage({ message: `Error during update`, type: 'error' })
          })
        setPersons(persons.concat(personObject))
        setErrorMessage({
          message: `the phone of ${personObject.name} has changed`,
          type: 'notification'
        })
        setNewName('')
        setNewPhone('')

        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      }
    } else {
      DB.create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson).reverse())
          setErrorMessage({
            message: `Added ${personObject.name}`,
            type: 'notification'
          })
          setNewName('')
          setNewPhone('')
        })
        .catch(error => {
          setErrorMessage(`${error}`)
          console.log(error)
        })
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  const handleSearch = e => {
    let keyword = e.target.value.toLowerCase()
    let filter = persons.filter(item => {
      return item.name.indexOf(keyword) > -1
    })

    setFiltered([])
    setFiltered(filter)
  }

  // clousure to be able to access each item scope at cration time
  const handleDeletePerson = (name, id) => () => {
    if (window.confirm(`Do you want to delete ${name} ?`)) {
      DB.deletePerson(id)
        .then(() => {
          setPersons(persons.filter(n => n.id !== id))
          setErrorMessage({
            message: `Deleted ${name}`,
            type: 'notification'
          })
        })
        .catch(error => {
          console.log(error)
          // here you refresh the state to remove the person that is not in the backend db
          setPersons(persons.filter(n => n.id !== id))
          // in case you try to delete a person that is already deleted show the message
          setErrorMessage({
            message: `The user ${name} was deleted from the server already.`,
            type: 'error'
          })
        })
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  useEffect(() => {
    DB.getAll().then(response => {
      console.log(response)
      setPersons(response.reverse())
    })
  }, [])

  return (
    <div className={'app-container'}>
      <Notification message={errorMessage} />
      <Search onSearch={handleSearch} />
      <h2>Phonebook</h2>
      <SummitForm
        name={newName}
        phone={newPhone}
        onFormSummit={handleSummit}
        onPhonechangue={handlePhoneChange}
        onNameChangue={handleNameChangue}
      />
      <h2>List of persons with phones</h2>
      <Persons
        persons={filtered.length === 0 ? persons : filtered}
        deletePerson={handleDeletePerson}
      ></Persons>
    </div>
  )
}

export default App
