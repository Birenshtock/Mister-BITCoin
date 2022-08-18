import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
  return (
    <div className="contact-preview">
      <Link to={`/contact/${contact._id}`} className="contact-info">
        <img className="contact-img" src={`https://xsgames.co/randomusers/assets/avatars/male/${contact._id}.jpg`} alt="" />
        <h4>{contact.name}</h4>
      </Link>

      <section className="actions">
        <button onClick={() => onRemoveContact(contact._id)} className="remove-btn">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <Link className="edit-btn" to={`/contact/edit/${contact._id}`}>
          <i class="fa-solid fa-pen-to-square"></i>
        </Link>
      </section>
    </div>
  )
}
