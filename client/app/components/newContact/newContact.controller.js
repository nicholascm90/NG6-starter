class NewContactController {
  constructor(contactList, $location) {
    "ngInject"
    this.location = $location; 
    this.contacts = contactList;  
    this.name = 'newContact';
    this.firstName; 
    this.lastName; 
    this.email; 
    this.phone; 
  }

  getContactData() {
    return {
      firstName: this.firstName, 
      lastName: this.lastName, 
      email: this.email, 
      phone: this.phone
    }
  }
  addContact() {
    this.contacts.addContact(this.getContactData()); 
    this.location.path('/contacts'); 
  }
}

export default NewContactController;
