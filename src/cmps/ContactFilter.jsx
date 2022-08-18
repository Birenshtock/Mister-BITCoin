import { useEffect, useState } from 'react'

export const ContactFilter = (props) => {
  const [filterBy, setFilterBy] = useState({
    term: '',
  })

  useEffect(() => {
    props.onChangeFilter(filterBy)
  }, [filterBy])

  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    setFilterBy((filterBy) => ({ ...filterBy, [field]: value }))
  }

  const { term } = filterBy
  return (
    <form className="contact-filter">
      <section>
        <input value={term} onChange={handleChange} type="text" name="term" placeholder="Search" />
      </section>
    </form>
  )
}
