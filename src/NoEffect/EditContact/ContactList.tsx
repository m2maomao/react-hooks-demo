import type { ContactListProps } from './types/contact.types';

const ContactList = ({contacts, selectedId, onSelect}: ContactListProps) => {
  return (
    <section>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <button onClick={() => onSelect(contact.id)}>
              {
                contact.id === selectedId ? <b>{contact.name}</b> : contact.name
              }
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactList;