import React, { useState } from 'react'
import './App.css'

const App = ({ anecdotesList }) => {
  const [anecdotes, setAnecdotes] = useState([...anecdotesList])
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))


  const randomAnecdoteHandler = (anecdotesNum) => {
    let randomAnecdoteNumber = Math.floor(Math.random() * anecdotesNum)


    if (selected === randomAnecdoteNumber) {
      randomAnecdoteNumber = Math.floor(Math.random() * anecdotesNum)
    }

    setSelected(randomAnecdoteNumber)
  }

  const voteHandler = (currentAnecdote) => {

    const votedAnecdotes = anecdotes.map((item, index) => {
      if (index === currentAnecdote) {
        return {
          ...item,
          voteCount: item.voteCount + 1
        }
      } else {
        return item
      }
    })
    setAnecdotes(votedAnecdotes);
  }

  const mostVotdAnecdoteHandler = (anecdotes) => {
    let mostVoted = {
      anecdote: 'No hay anecdotas votadas aun',
      voteCount: 0
    }
    anecdotes.map((item, index) => {
      if (item.voteCount > mostVoted.voteCount) {
        mostVoted = item
      }
      return null
    })
    return mostVoted.anecdote
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div className={'anecdotes'}><p  >{anecdotes[selected].anecdote}</p></div>

      <p>This anecdote has {anecdotes[selected].voteCount} votes</p>
      <button type={'buton'} onClick={() => randomAnecdoteHandler(anecdotes.length)} > Random Anecdote </button>
      <button type={'button'} onClick={() => voteHandler(selected)} >vote</button>

      <h2>Most voted anecdote</h2>
      <p>{mostVotdAnecdoteHandler(anecdotes)}</p>

    </div>
  )
}

export default App