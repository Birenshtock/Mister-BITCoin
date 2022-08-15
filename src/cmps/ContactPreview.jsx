import { Component } from 'react'

export function ContactPreview({ contact, onSelectContactId }) {
  return (
    <div onClick={() => onSelectContactId(contact._id)} className="contact-preview">
      <section className="contact-info">
        <img className="contact-img" src={`https://xsgames.co/randomusers/assets/avatars/male/${contact._id}.jpg`} alt="" />
        <h4>{contact.name}</h4>
      </section>

      <section className="actions">
        <button className="remove-btn">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </section>
    </div>
  )
}
