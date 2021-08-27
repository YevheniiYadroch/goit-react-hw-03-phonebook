import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import './App.css';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formChangeHandle = e => {
    e.preventDefault();
    if (this.state.contacts.some(item => item.name === e.target.children.name.value)) {
      return alert(`${e.target.children.name.value} is already in contacts`);
    }
    this.setState(prevValue => (
      { contacts: [...prevValue.contacts, { id: uuidv4(), name: e.target.children.name.value, number: e.target.children.number.value}]}
    ))
  }

  searchHandle = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  onDelete = e => {
    this.setState(prevValue => (
      {contacts: prevValue.contacts.filter(item => item.id !== e.target.dataset.id)}
    ))
  }

  render() {
    const list = this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onChange={ this.formChangeHandle}/>
        <h2>Contacts</h2>
        <Filter onChange={this.searchHandle}/>
        <ContactList props={list} onDelete={this.onDelete}/>
      </div>
    )
  };
}

export default App;
