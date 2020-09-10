import React, { useState, useEffect } from "react";
import Persons from "./components/persons";
import Notification from "./components/Notification";
import SummitForm from "./components/SummitForm";
import Search from "./components/Search";
import DB from "./services/dbService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleNameChangue = (e) => {
    setNewName(e.target.value);
    console.log(newName);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
    console.log(newPhone);
  };

  const handleSummit = (event) => {
    event.preventDefault();
    if (newName === "" || newPhone === "") {
      console.log("Alert: Name or phone can't be empty");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return setErrorMessage("no name or phone");
    }
    const personObject = {
      name: newName.toLowerCase(),
      phone: newPhone,
      id: Math.floor(Math.random() * 101),
    };

    if (
      persons.filter((person) => person.name === personObject.name).length > 0
    ) {
      if (
        window.confirm(
          `${personObject.name} is already in the phonebook, do you want to update the phone?`
        )
      ) {
        const personToUpdateObject = persons.find((n) => n.name === newName);
        DB.update(personToUpdateObject.id, { ...personToUpdateObject, phone: newPhone })
          .then((updatedPerson) => {
            setPersons(
              persons.map((n) => (n.name === newName ? updatedPerson : n))
            );
          })
          .catch((error) => {
            console.log(error);
            setErrorMessage("Error during update");
          });
        setPersons(persons.concat(personObject));
        setErrorMessage(`the phone of ${personObject.name} has changed`);
        setNewName("");
        setNewPhone("");

        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } else {
      DB.create(personObject)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setErrorMessage(`Added ${personObject.name}`);
          setNewName("");
          setNewPhone("");
        })
        .catch((error) => {
          setErrorMessage(`${error}`);
          console.log(error);
        });
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const handleSearch = (e) => {
    let keyword = e.target.value.toLowerCase();
    let filter = persons.filter((item) => {
      return item.name.indexOf(keyword) > -1;
    });

    setFiltered([]);
    setFiltered(filter);
  };
  const handleDeletePerson = (name, id) => {
    return () => {
      if (window.confirm(`Do you want to delete ${name} ?`)) {
        DB.deletePerson(id)
          .then(() => {
            setPersons(persons.filter((n) => n.id !== id));
            setErrorMessage(`deleted ${name}`);
          })
          .catch((error) => {
            console.log(error);
            // in case you try to delete a person twice
            setPersons(persons.filter((n) => n.name !== name));
            setErrorMessage(
              `the user ${name} has been deleted from the server.`
            );
          });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    };
  };

  useEffect(() => {
    DB.getAll().then((response) => {
      console.log(response);
      setPersons(response.reverse());
    });
  }, []);

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Notification message={errorMessage} />
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
  );
};

export default App;
