import {useState} from "react";
import PropTypes from 'prop-types';
import styles from "./Phonebook.module.css";

export default function Phonebook ({handleSubmit}) {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit({name,number});
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleChangeName = (e) => {
    setName(e.target.value);  
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);  
  };


    return (
      <form onSubmit={onSubmit}>
        <h2>Phonebook</h2>

        <input
          className={styles.inputName}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name..."
          required
        ></input>

        <input
          className={styles.inputNumber}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          placeholder="Number..."
          required
        ></input>

        <button className={styles.btn} type="submit" onSubmit={onSubmit}>Add contact</button>
      </form>
    );
  }

  Phonebook.propTypes = {
    onSubmit: PropTypes.func.isRequired,
        };