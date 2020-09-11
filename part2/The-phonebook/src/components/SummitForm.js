import React from 'react'

const SummitForm = props => {
  return (
    <div className={'submit-form'}>
     
        <form onSubmit={props.onFormSummit}>
          <label htmlFor={'person_name'}>name:</label>{' '}
          <input
            id={'person_name'}
            value={props.name}
            onChange={props.onNameChangue}
          />
          <label htmlFor={'phone_num'}>phone:</label>{' '}
          <input
            id={'phone_num'}
            value={props.phone}
            onChange={props.onPhonechangue}
          />
          <button type='submit'>add</button>
        </form>
     
    </div>
  )
}

export default SummitForm
