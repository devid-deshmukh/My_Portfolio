import React from 'react'
import '../styles/Contacts.css'

const Contacts = () => {
  return (
    <section id="contact">
    <div className="contact-container">
      <form className="contact-form">
        <div className="form-group">
          <label>Enter your name:</label>
          <input type="text" placeholder="Name" />
        </div>

        <div className="form-group">
          <label>Enter your mail:</label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label>Select your country:</label>
          <select>
            <option value="">-- Choose a Country --</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </section>
  )
}

export default Contacts