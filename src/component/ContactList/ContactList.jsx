
export const ContactList = ({contactInfo , onDeleteContact}) => {
    return (
      <ul>
        {contactInfo.map(({ name, number, id }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    );
}