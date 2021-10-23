import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Phonebook from "./phonebook/Phonebook";
import ContactList from "./contactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.state.contacts.find(
      ({ name }) => name === contact.name && contact.name
    )
      ? alert(`${contact.name} already exists`)
      : this.setState((prev) => {
        return {
          contacts: [...prev.contacts, contact],
        };
      });
    this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filterByName = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prev) => {
      return {
        contacts: prev.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const filterContact = this.filterByName();
    const { filter } = this.state;
    return (
      <>
        <Phonebook
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />

        <ContactList
          contacts={filterContact}
          filter={filter}
          onChange={this.handleChange}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
