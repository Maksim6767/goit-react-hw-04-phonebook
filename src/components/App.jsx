import { useState, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li,p{list-style:none;margin:0;padding:0;};
  body{
   margin-top:50px;
   display: flex;
   justify-content:center;
   align-items:center;
   color: '#090909'; 
  }
`;  

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

  const addContact = (values, { resetForm }) => {
    const newContact = { id: nanoid(4), ...values };
    const newContactName = newContact.name.toLowerCase();
    
      if (contacts.find (person => person.name.toLowerCase() === newContactName)) {
      alert(`${newContact.name} is already in contact`);
    } else {
      setContacts ([newContact, ...contacts ]);
      resetForm();
    }
  };
  
  const deleteContact = id => {
    setContacts (contacts.filter (contact => contact.id !== id));
  };

  const onFilterChange = e => {
    const filterWord = e.target.value.toLowerCase();
    setFilter (filterWord);
  };

  const visibleContacts = contacts.filter (abonent =>
    abonent.name.toLowerCase().includes(filter)
  );

    return (
      <div>
        <GlobalStyle />
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts:</h2>
        {contacts.length === 0 ? (
          <h3>You have no contacts saved</h3>
        ) : (
          <>
            <Filter value={filter} onFilterChange={onFilterChange} />
            <ContactList
              listAbonents={visibleContacts}
              onDeleteClick={deleteContact}
            />
          </>
        )}
      </div>
    );
  }