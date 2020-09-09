import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import courses from "./coursesdb.js";

ReactDOM.render(<App courses={courses} />, document.getElementById("root"));
