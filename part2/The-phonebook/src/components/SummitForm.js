import React from 'react'

const SummitForm = (props) => {


   return ( 
   <form onSubmit={props.onFormSummit}>
        <div>
            name: <input onChange={props.onNameChangue} />
            phone: <input onChange={props.onPhonechangue} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}


export default SummitForm
