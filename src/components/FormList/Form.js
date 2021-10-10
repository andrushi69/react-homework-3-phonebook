import React from "react";
import shortid from "shortid"
import styles from "./Form.module.scss"

class Form extends React.Component {
  state = {
    name: "",
    number: "",
  }
  uniqueId = shortid.generate()
  uniqueIdSecond = shortid.generate()

  handleChange = (e) => {
    const {name, value} = e.currentTarget
    this.setState({[name]: value})

  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getContact(this.state)
    this.props.onSubmit(this.state)
    this.reset()
  }
  reset = () => {
    this.setState({name: ""})
    this.setState({number: ""})
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.form_label} htmlFor={this.uniqueId}>
          Name
          <input className={styles.form_input}
            type="text"
            name="name"
            id={this.uniqueId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.form_label} htmlFor={this.uniqueIdSecond}>
          Phone
          <input className={styles.form_input}
            type="tel"
            name="number"
            id={this.uniqueIdSecond}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.form_button} type="submit">Add Contact</button>
      </form>
    )
  }
}

export default Form