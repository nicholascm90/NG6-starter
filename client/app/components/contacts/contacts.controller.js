class ContactsController {
  
  constructor(contactList) {
    "ngInject";
    this.contacts = contactList.getContacts(); 
  }
}

export default ContactsController;
