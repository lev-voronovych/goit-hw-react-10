import { Component } from "react"
import { ContactList } from "./component/ContactList/ContactList"
import { ContactForm } from "./component/ContactForm/ContactForm"
import { Filter } from "./component/Filter/Filter";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    this.setState((prevState) => {
      const exists = prevState.contacts.some(
        (con) =>
          con.name.toLowerCase() === contact.name.toLowerCase() ||
          con.number === contact.number,
      );

      if (exists) {
        alert("я вже є такий");
        return prevState;
      }

      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteToDo = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContactFunction={this.addContact} />
        <h1>Contacts</h1>
        <Filter onChange={this.changeFilter} value={filter} />
        <ContactList contactInfo={filteredContacts} onDeleteContact={this.deleteToDo} />
      </>
    );
  }
}

export default App
