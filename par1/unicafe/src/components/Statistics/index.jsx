import React from "react";
import Statistic from './StatisticWrapper'
import { averageCalc, totalCalc, totalPositiveAverageCalc } from './statisticHelpers'

const Statistics = ({ good, neutral, bad }) => {


    let all = totalCalc([good, neutral, bad])
    let averageStatistics = averageCalc([good, neutral, bad]).toFixed(2)
    let postitivePercent = totalPositiveAverageCalc(all, good).toFixed(0)

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <Statistic label={'Good'} value={good} />
                    <Statistic label={'Good'} value={good} />
                    <Statistic label={'Good'} value={good} />
                    <Statistic label={'All'} value={all} />
                    <Statistic label={'Average'} value={averageStatistics} />
                    <Statistic label={'Positive'} value={String(postitivePercent) + '%'} />
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;
