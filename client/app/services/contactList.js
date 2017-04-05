

export default class ContactList {

    constructor($q) {
        "ngInject"
        this.q = $q; 
        this.contacts = [{id: 1, firstName: 'Nick', lastName: 'Morrell', email: 'nicholascm90@gmail.com', phone: 8504966910, active: true }]; 
    }

    getContacts() {
        return this.contacts; 
    }

    _addContact(person) {
        person['id'] = this.contacts.length + 1;  //attach an ID. When communicating with the rest api 
        // we would expect the server to generate unique IDs for contacts
        this.contacts.push(person)
        console.log(this.contacts); 
    }

    saveContact(person) {
        var deferred = this.q.defer(); 
        if(person.id != 'undefined') {
            var index = _.findIndex(this.contacts, _.matchesProperty('id', person.id)); 
            this.contacts[index] = person; 
            deferred.resolve(); 
        } else{
            this._addContact(person);
            deferred.resolve(); 
        }

        return deferred.promise; 
    }

    deleteContact(contact) {
        var deferred = this.q.defer(); 
        var index = _.findIndex(contacts, _.matchesProperty('id', contact.id)); 
        contacts.splice(index, 1); 
        // console.log('deleted', contacts, index); 
        deferred.resolve(); 

        return deferred.promise; 
    }

    getContact(id) {
        let contact = this.contacts.find(x => x.id == id)
        let found = contact != 'undefined' ? contact : false; 
        return found; 
    }

}