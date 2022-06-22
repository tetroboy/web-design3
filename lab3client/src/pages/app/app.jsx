import React, { Component } from 'react';
import Contacts from './Contacts';

class Application extends Component {
    state = {
        data: [
            {
                id: 0,
                name: 'Zhenya',
                number: '+380 553 620 34 52'
            },
            {
                id: 1,
                name: 'Anton',
                number: '+380 541 389 00 00'
            },
            {
                id: 2,
                name: 'Dima',
                number: '+380 532 412 52 52'
            }
        ]
    };

    addContact = (contact) => {
        const { data } = this.state;
        data.push(contact);
        this.setState({ data });
    }
    deleteContact = (id) => {
        const { data } = this.state;
        delete data[id];
        this.setState({ data });
    }
    render() {
        return (
            <div className="App">
                <Contacts
                    contacts={this.state.data}
                    addContact={this.addContact}
                    deleteContact={this.deleteContact}
                />
            </div>
        );
    }
}

export default Application;
