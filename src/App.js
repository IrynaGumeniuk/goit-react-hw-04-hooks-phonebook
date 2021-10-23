import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Phonebook from "./phonebook/Phonebook";
import ContactList from "./contactList/ContactList";
import FilterContacts from "./filterContacts/FilterContacts";

export default function App() {

  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
  ]);

  const [filter, setFilter] = useState("");


const handleSubmit = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    contacts.some((e) => e.name === name)
      ? alert(`${name} already exists`)
      : setContacts([contact, ...contacts]);
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);  
  };

  const filterByName = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()),
);
};

  const deleteContact = (id) => {
    setContacts(contacts.filter((i) => i.id !== id));
  };

  const filterContact = filterByName();
  return (
    <>
      <Phonebook
        onSubmit={handleSubmit}
      />
      <FilterContacts value={filter} onFilter={handleChangeFilter} />
      <ContactList
        contacts={filterContact}
        filter={filter}
        deleteContact={deleteContact}
      />
    </>
  );
}
