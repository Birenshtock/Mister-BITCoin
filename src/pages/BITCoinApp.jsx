import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { contactService } from '../services/contactService'
import { ContactList } from '../cmps/ContactList'
// import { ContactDetails } from './ContactDetails'
import { ContactFilter } from '../cmps/ContactFilter'
import { Link } from 'react-router-dom'
import { NiceButton } from '../cmps/NiceButton'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'

export const BITCoinApp = (props) => {
  const contacts = useSelector((state) => state.contactModule.contacts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
  }, [])

  // async componentDidMount() {
  //   props.loadContacts()
  // }

  const onRemoveContact = async (contactId) => {
    // await contactService.remove(contactId)
    // loadContacts()
    await dispatch(removeContact(contactId))
  }

  const onChangeFilter = (filterBy) => {
    // setState({ filterBy }, loadContacts)
    dispatch(setFilterBy(filterBy))
    dispatch(loadContacts())
  }

  // render() {

  const TextCmp = () => <span>Nice Button</span>
  const Icon = () => '🎂'
  return (
    <div className="bitcoin-app">
      <NiceButton Icon={Icon} onClick={() => console.log('nice button clicked')}>
        <TextCmp />
        <Icon />
      </NiceButton>
      <ContactFilter onChangeFilter={onChangeFilter} />
      <Link to="/contact/edit">Add Contact</Link>

      <ContactList history={props.history} onRemoveContact={onRemoveContact} contacts={contacts} />
    </div>
  )
  // }
}

// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contactModule.contacts,
//   }
// }

// const mapDispatchToProps = {
//   loadContacts,
//   removeContact,
//   setFilterBy,
//   // spendBalance,
// }

// export const BITCoinApp = connect(mapStateToProps, mapDispatchToProps)(_BITCoinApp)

// export const BITCoinApp = connect()(_BITCoinApp)
