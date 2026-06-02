import { Component } from "react";

import { nanoid } from 'nanoid'

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.addContactFunction(contact);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label htmlFor="number">
          Number
          <input
            id="number"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
