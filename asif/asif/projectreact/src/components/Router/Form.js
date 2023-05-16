import React from 'react'

export default function Form() {
  return (
    <div>
      <div className='form-container'>
        <h1>Send a Messaage to us!!</h1>
        <form>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Subject'/>
            <textarea placeholder='Message' rows="4"/>
            <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}
