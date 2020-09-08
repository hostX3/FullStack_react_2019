import React from "react";

const Statistics = ({ good, neutral, bad }) => {

    const average = (paramsArr)=> {
        const total = paramsArr.reduce((acc, current) => {
            return acc + current
        })

        const length = paramsArr.length

        return total / length

    }
    // console.log(average([good,neutral,bad]))

    const total = (paramsArr)=> {
        const total = paramsArr.reduce((acc, current) => {
            return acc + current
        })

        return total

    }

    const totalPositiveAverage = (total, potitives) =>{

        return ((potitives / total) * (100))
    }


    let all = total([good, neutral, bad])
    let averageStatistics = average([good, neutral, bad]).toFixed(2)
    let postitivePercent = totalPositiveAverage(all, good).toFixed(0)

    return (
        <div>
            <h1>Statistic</h1>
            <p>good {good}</p>
            <p>neutral{neutral}</p>
            <p>bad {bad}</p>
            {'-------------'}
            <p>all {all}</p>
            <p>average {averageStatistics} </p>
            <p>positive {postitivePercent}%</p>
        </div>
    );
};

export default Statistics;
