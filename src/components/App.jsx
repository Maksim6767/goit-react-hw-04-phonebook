import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem ('contacts')) {
      this.setState ({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      }
    )}
  }

  componentDidUpdate (_, prevState) {
    if ( prevState.contacts.length !== 0 &&
         prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (values, { resetForm }) => {
    const newContact = { id: nanoid(8), ...values };
    const newContactName = newContact.name.toLowerCase();
    if (
      this.state.contacts.find(
        person => person.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      resetForm();
    }
  };
  
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterChange = e => {
    const filterWord = e.target.value.toLowerCase();
    this.setState({ filter: filterWord });
  };

  render() {
    const { value } = this.state;
    const { addContact, onFilterChange, deleteContact } = this;
    const visibleContacts = this.state.contacts.filter(abonent =>
      abonent.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <div>
        <GlobalStyle />
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={value} onFilterChange={onFilterChange} />
        <ContactList
          listAbonents={visibleContacts}
          onDeleteClick={deleteContact}
        />
      </div>
    );
  }
}