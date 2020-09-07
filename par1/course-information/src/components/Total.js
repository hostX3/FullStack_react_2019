import React from "react";

const Total = ({ parts }) => {

  function total(parts) {
    const reducer = (accumulator, currentValue) => {
      return ({
        exercises: accumulator.exercises + currentValue.exercises,
      })
    };
    return parts.reduce(reducer).exercises
  }

  return (
    <div>
      <h3>Number of exercises: {total(parts)}</h3>
    </div>
  );
};

export default Total;
