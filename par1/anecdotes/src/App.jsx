import React, { useState } from 'react'


const App = ({ anecdotesList }) => {
  const [anecdotes, setAnecdotes] = useState([...anecdotesList])
  const [selected, setSelected] = useState(0)

  
  const randomAnecdoteHandler = (anecdotesNum) => {
    const randomAnecdoteNumber = Math.floor(Math.random() * anecdotesNum)
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
      if (item.voteCount > mostVoted.voteCount){
        mostVoted = item
      }
    })
    return mostVoted.anecdote
  }


  return (
    <div>
      <p>Anecdote of the day</p>
      <p>{anecdotes[selected].anecdote}</p>
      <p>{anecdotes[selected].voteCount}</p>
      <button type={'buton'} onClick={() => randomAnecdoteHandler(anecdotes.length)} > Random Anecdote </button>
      <button type={'button'} onClick={() => voteHandler(selected)} >vote</button>

      <p>Most voted anecdote</p>
      <p>{mostVotdAnecdoteHandler(anecdotes)}</p>

    </div>
  )
}

export default App