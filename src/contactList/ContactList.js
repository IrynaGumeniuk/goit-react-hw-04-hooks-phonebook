import React from "react";
import OneContact from "../oneContact/OneContact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <OneContact
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
