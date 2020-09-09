export const averageCalc = (paramsArr) => {
    const total = paramsArr.reduce((acc, current) => {
        return acc + current
    })

    const length = paramsArr.length

    return total / length

}
// console.log(average([good,neutral,bad]))

export const totalCalc = (paramsArr) => {
    const total = paramsArr.reduce((acc, current) => {
        return acc + current
    })

    return total

}

export const totalPositiveAverageCalc = (total, potitives) => {

    return ((potitives / total) * (100))
}

