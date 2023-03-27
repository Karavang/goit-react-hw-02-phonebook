import { nanoid } from 'nanoid';
function Button() {
  return (
    <button
      className="btn btn-primary add-contact"
      onClick={e => {
        e.preventDefault();
        const newContact = {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        };
        this.setState({
          contacts: [...this.state.contacts, newContact],
          name: '',
          number: '',
        });
      }}
    >
      Add contact
    </button>
  );
}

export default Button;
