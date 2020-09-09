import React, { useState } from 'react'


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)

  const randomAnecdoteHandler = (anecdotesNum)=>{
    const randomAnecdoteNumber = Math.floor(Math.random() * anecdotesNum)
    setSelected(randomAnecdoteNumber)
  }


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button type={'buton'} onClick={()=>randomAnecdoteHandler(anecdotes.length)} > Random Anecdote </button>
    </div>
  )
}

export default App