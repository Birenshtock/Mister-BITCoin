import { Component } from 'react'
import { contactService } from '../services/contactService'
import { ContactList } from '../cmps/ContactList'
import { ContactDetails } from './ContactDetails'
import { ContactFilter } from '../cmps/ContactFilter'

export class BITCoinApp extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null,
  }
  componentDidMount() {
    this.loadContacts()
  }

  async loadContacts() {
    try {
      const contacts = await contactService.getContacts(this.state.filterBy)
      console.log('contacts', contacts)
      this.setState({ contacts })
    } catch (err) {
      console.log('err:', err)
    }
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  onSelectContactId = (contactId) => {
    console.log('rrr', contactId)
    this.setState({ selectedContactId: contactId })
  }

  render() {
    const { contacts, selectedContactId } = this.state
    console.log('ttttttts', contacts)
    return (
      <div className="bitcoin-app">
        {selectedContactId ? (
          <ContactDetails onBack={() => this.onSelectContactId(null)} contactId={selectedContactId} />
        ) : (
          <>
            <ContactFilter onChangeFilter={this.onChangeFilter} />

            <ContactList onSelectContactId={this.onSelectContactId} contacts={contacts} />
          </>
        )}
      </div>
    )
  }
}
