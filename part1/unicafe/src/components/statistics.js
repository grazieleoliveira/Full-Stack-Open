import React from 'react'
import StatisticLine from './statisticline'

const Statistics = ({ good, neutral, bad }) => {

    const all = good + neutral + bad
    const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
    const positive = (good / all) * 100 + '%'

    if(all === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <div>
            <h1>statistics</h1>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={all}/>
            <StatisticLine text="average" value={average}/>
            <StatisticLine text="positive" value={positive}/>
        </div>
    )
}

export default Statistics