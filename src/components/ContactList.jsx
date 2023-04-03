import React from 'react';

export default function List({ contacts }) {
  console.log(contacts);
  return (
    <div className="scrollable-list">
      <ul className="listContacts">
        {() => {
          contacts.map(e => (
            <li key={e.id}>
              <b>{e.name}</b> - {e.number}
            </li>
          ));
        }}
      </ul>
    </div>
  );
}
