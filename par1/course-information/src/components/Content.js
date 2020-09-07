import React from "react";

const Content = ({ coursesNames }) => {
  const Part = ({ _no, nombres, exercisesNum }) => {
    return (
      <div>
        <p>
          Parte{_no}: {nombres}{" "}
        </p>
        <p>ejercicios: {exercisesNum}</p>
      </div>
    );
  };

  return (
    <div>
      {coursesNames.map((item, i) => {
        return (
          <Part
            key={i}
            _no={i}
            nombres={item.name}
            exercisesNum={item.exercises}
          />
        );
      })}
    </div>
  );
};

export default Content;
