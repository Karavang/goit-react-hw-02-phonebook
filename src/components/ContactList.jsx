import React from 'react';

export default function List({ contacts, filter }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  console.log(filter);
  return (
    <div className="scrollable-list">
      <ul className="listContacts">
        {filter
          ? filteredContacts.map(e => (
              <li key={e.id}>
                <b>{e.name}</b> - {e.number}
              </li>
            ))
          : contacts.map(e => (
              <li key={e.id}>
                <b>{e.name}</b> - {e.number}
              </li>
            ))}
      </ul>
    </div>
  );
}
