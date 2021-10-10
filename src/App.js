import React from "react";
import Form from "./components/FormList/Form";
import ContactsList from "./components/ContactList/ContactsList";
import Filter from "./components/Search/Search";
import {v4 as uuidv4} from "uuid";


class App extends React.Component {
  state = {
    filter: "",
    contacts: [
      {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
      {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
      {id: "id-3", name: "Eden Clements", number: "645-17-79"},
      {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
    ],
    filterContacts: [],
  }

  addContact = (contact) => {
    if (this.state.contacts.filter((e) => (e.name === contact.name && e.number === contact.number)).length) {
      alert(`${contact.name} is already in contacts`);
    } else {
      let array = [...this.state.contacts]
      array.push(contact)
      this.setState({contacts: array})
      contact.id = uuidv4()
    }

  }
  formSubmitHandler = (data) => {
    console.log(data)
  }
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
    this.setState({filterContacts: this.state.contacts.filter(contact => contact.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()))})
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== contactId)
      }
    })
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts")
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  render() {
    return (
      <div className={"main_content"}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} getContact={this.addContact}/>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactsList deleteContact={this.deleteContact}
                      contacts={!this.state.filterContacts.length ? this.state.contacts : this.state.filterContacts}/>
      </div>
    )
  }
}

export default App