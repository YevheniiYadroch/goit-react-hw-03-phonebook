import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    initialState = {
        name: '',
        number: ''
    }
    
    state = this.initialState;

    handleFormReset = () => {
    this.setState(() => this.initialState)
  }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }


    render() {
        const { name, number } = this.state;

        return (
            <form className="ContactForm" onReset={this.handleFormReset} onSubmit={this.props.onChange}>
                <label htmlFor="name" className="ContactForm__name">Name</label>
                <input
                    className="ContactForm__input"
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={this.handleChange}
                />
                <label htmlFor="number" className="ContactForm__number">
                    Number
                </label>
                <input
                    className="ContactForm__input"
                    value={number}
                    type="tel"
                    name="number"
                    id="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={this.handleChange}
                />
                <button type="submit"  className="ContactForm__button">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;