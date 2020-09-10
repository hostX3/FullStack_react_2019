import React from "react";

const SummitForm = (props) => {
  return (
    <form onSubmit={props.onFormSummit}>
      <div>
       <label htmlFor={'person_name'} >name:</label>  <input id={'person_name'} value={props.name} onChange={props.onNameChangue} />
       <label htmlFor={'phone_num'} >phone:</label>  <input id={'phone_num'} value={props.phone} onChange={props.onPhonechangue} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default SummitForm;
