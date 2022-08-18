import { Component } from 'react'
import { ContactPreview } from './ContactPreview'

export class ContactList extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props //הפרופס שמגיעים מהאבא
    if (!contacts) return <div>Loading... </div>
    return (
      <div className="contact-list">
        {contacts.map((contact) => (
          <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} />
        ))}
      </div>
    )
  }
}
