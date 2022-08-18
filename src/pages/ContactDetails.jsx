import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { contactService } from '../services/contactService'

export const ContactDetails = (props) => {
  const [contact, setContact] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadContact()
  }, [params.id])

  async function loadContact() {
    const contactId = params.id
    const contact = await contactService.getContactById(contactId)
    setContact(contact)
  }

  const onBack = () => {
    navigate('/contacts')
    // props.history.goBack()
  }

  // render() {
  // const { contact } = state
  if (!contact) return <div> Loading...</div>
  return (
    <div className="contact-details">
      <img className="contact-img" src={`https://xsgames.co/randomusers/assets/avatars/male/${contact._id}.jpg`} alt="" />
      <h5>Name: {contact.name}</h5>
      <h5>Phone:{contact.phone}</h5>
      <h5>Email:{contact.email}</h5>
      <button onClick={onBack}>Back</button>
      <Link to="/contact/1">Next Robot</Link>
    </div>
  )
  // }
}
