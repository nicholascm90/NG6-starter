

export default class ContactList {

    constructor() {
        this.contacts = [{id: 1, firstName: 'Nick', lastName: 'Morrell', email: 'nicholascm90@gmail.com', phone: 8504966910, active: true }]; 
    }

    getContacts() {
        return this.contacts; 
    }

    addContact(person) {
        person['id'] = this.contacts.length + 1;  //attach an ID. When communicating with the rest api 
        // we would expect the server to generate unique IDs for contacts
        this.contacts.push(person)
        console.log(this.contacts); 
    }

    getContact(id) {
        let contact = this.contacts.find(x => x.id == id)
        let found = contact != 'undefined' ? contact : false; 
        return found; 
    }

}