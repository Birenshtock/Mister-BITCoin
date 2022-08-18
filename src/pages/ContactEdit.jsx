import { Component, createRef, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contactService } from '../services/contactService'
import { loadContacts } from '../store/actions/contactActions'

export const ContactEdit = (props) => {
  const [contact, setContact] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  const inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  useEffect(() => {
    loadContact()
  }, [])

  const loadContact = async () => {
    const contactId = params.id
    const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
    setContact(contact)
  }

  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    // setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    setContact((prevContact) => ({ ...prevContact, [field]: value }))
  }

  const onSaveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact({ ...contact })
    navigate('/contacts')
  }

  if (!contact) return <div>Loading...</div>
  return (
    <section className="contact-edit">
      <h1>{contact._id ? 'Edit Contact' : 'Add Contact'}</h1>
      <form onSubmit={onSaveContact}>
        <input ref={inputRefFunc} value={contact.name} onChange={handleChange} type="text" name="name" placeholder="name" />

        <input value={contact.phone} onChange={handleChange} type="text" name="phone" placeholder="phone" />

        <input value={contact.email} onChange={handleChange} type="text" name="email" placeholder="email" />

        <button>Save</button>
      </form>
    </section>
  )
}
