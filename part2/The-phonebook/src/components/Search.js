import React from "react";

const Search = (props) => {
  return (
    <>
      <div className="search">
      <label htmlFor={'person_name'} >Search name:</label><input id={'person_name'}  onChange={props.onSearch} /> 
      </div>
    </>
  );
};

export default Search;
