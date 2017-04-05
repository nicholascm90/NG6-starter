

export default class ContactList {

    constructor() {
        this.contacts = ["wil", "ben"]; 
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

    getContact() {
        return this.contacts.find(x => x.id ==id); 
    }

}