import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    render() {
        return (
            <div className="Filter">
                <h3 className="Filter__title">Find contacts by name</h3>
                <input
                    type="text"
                    name="search"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
    
}

export default Filter;