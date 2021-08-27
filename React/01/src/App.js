import data from './util/data';
import React, { useState } from 'react'
import List from './components/List'

import './style/main.css';

function App() {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    const newPeople = people.filter((person) => {
      return people.id !== id;
    })
    setPeople(newPeople)
  }
  return (
    <>
      <main>
        <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people = {people} removePerson={removePerson}/>
        <div className="buttons">
          <button onClick={()=> setPeople([])}>clear all</button>
          <button onClick={()=> setPeople(data)}>reset</button>
        </div>
        </section>
      </main>
    </>
  );
}

export default App;
