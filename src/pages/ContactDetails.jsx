import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactDetails extends Component {
  state = {
    contact: 'null',
  }

  async componentDidMount() {
    const contact = await contactService.getContactById(this.props.contactId)
    this.setState({ contact })
  }
  render() {
    const { contact } = this.state
    if (!contact) return <div> Loading...</div>
    return (
      <div className="contact-details">
        <img className="contact-img" src={`https://xsgames.co/randomusers/assets/avatars/male/${contact._id}.jpg`} alt="" />
        <h5>Name: {contact.name}</h5>
        <h5>Phone:{contact.phone}</h5>
        <h5>Email:{contact.email}</h5>
        <button onClick={this.props.onBack}>Back</button>
      </div>
    )
  }
}
