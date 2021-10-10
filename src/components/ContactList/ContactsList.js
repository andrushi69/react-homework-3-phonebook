import React from "react";

import styles from "./ContactList.module.scss"

class ContactsList extends React.Component {

  render() {
    return (
      <>
        <ul className={styles.contact_list}>
          {this.props.contacts.map(contact => {
            return (
              <li key={contact.id}><span className={styles.name}>{contact.name}:</span><span
                className={styles.number}>{contact.number}</span>
                {<button type="button" name="delete"
                         onClick={() => this.props.deleteContact(contact.id)}>Delete</button>}
              </li>
            )
          })}

        </ul>
      </>
    )
  }
}

export default ContactsList