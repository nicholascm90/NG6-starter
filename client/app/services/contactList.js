import _ from 'lodash';

export default class ContactList {

    constructor($q) {
        "ngInject"
        this.q = $q; 
        this.contacts = [{id: 1, firstName: 'Nick', lastName: 'Morrell', email: 'nicholascm90@gmail.com', phone: 8504966910, active: true }]; 
    }

    getContacts() {
        return this.contacts.filter(x => x.active != false).sort(this._sortAlphabeticalLastName);
    };

    _sortAlphabeticalLastName(a, b) {
        let nameA = a.lastName.toUpperCase(); 
        let nameB = b.lastName.toUpperCase(); 
        if(nameA < nameB) {
            return -1; 
        }
        if(nameA > nameB) {
            return 1; 
        }
        return 0; 
    }

    _addContact(person) {
        person['id'] = this.contacts.length + 1;  //attach an ID. When communicating with the rest api 
        // we would expect the server to generate unique IDs for contacts
        this.contacts.push(person)
    }

    saveContact(person) {
        var deferred = this.q.defer(); 
        if (person.id == undefined) {
            this._addContact(person);
            deferred.resolve(); 
        } else {
            var index = _.findIndex(this.contacts, _.matchesProperty('id', person.id)); 
            this.contacts[index] = person; 
            deferred.resolve(); 
        }

        return deferred.promise; 
    }

    deleteContact(contact) {
        var deferred = this.q.defer(); 
        var index = _.findIndex(this.contacts, _.matchesProperty('id', contact.id)); 
        this.contacts[index].active = false;
        // this.contacts.splice(index, 1); 
        deferred.resolve();         

        return deferred.promise; 
    }

    getContact(id) {
        let contact = this.contacts.find(x => x.id == id)
        let found = contact != 'undefined' ? contact : false; 
        return found; 
    }
}