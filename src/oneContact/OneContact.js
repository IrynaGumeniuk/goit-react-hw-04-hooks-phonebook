import React from "react";
import styles from "./OneContact.module.css";

const OneContact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li className={styles.item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default OneContact;
