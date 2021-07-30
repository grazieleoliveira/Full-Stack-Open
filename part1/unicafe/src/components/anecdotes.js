import React, { useState } from 'react'
import Button from './button'

const Anecdotes = ({ anecdotes }) => {
    const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
    const [selected, setSelected] = useState(0)
    const generateAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
    const computeVote = () => {
        const copy = [...votes];
        copy[selected] += 1;
        setVote(copy);
    }

    const highestVotes = Math.max(...votes)
    const winningAnecdote = anecdotes[votes.indexOf(highestVotes)]

    return (
        <div>
            <h1>Anecdotes</h1>
            <Button onClick={computeVote} text="vote" />
            <Button onClick={generateAnecdote} text="Generate an Anecdote!" />
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <h1>Anecdote with most votes</h1>
            <p>{winningAnecdote}</p>
            <p>has {highestVotes} votes</p>
        </div>
    )
}

export default Anecdotes