import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Phonebook from "./phonebook/Phonebook";
import ContactList from "./contactList/ContactList";

export default function App() {

  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
  ]);

  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    contacts.find(
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName({ [name]: value });
  };

  const filterByName = () => {
    return filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (id) => {
    setContacts((prev) => {
      return {
        contacts: prev.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  const filterContact = filterByName();
  return (
    <>
      <Phonebook
        onSubmit={handleSubmit}
        onChange={handleChange}
        name={name}
        number={number}
      />

      <ContactList
        contacts={filterContact}
        filter={filter}
        onChange={handleChange}
        deleteContact={deleteContact}
      />
    </>
  );
}
