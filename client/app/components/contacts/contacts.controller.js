class ContactsController {

/*
 * @param {ContactList} contacts 
 */

  constructor(contactList) {
    "ngInject";
    this.contacts = contactList.getContacts(); 
  }
}

export default ContactsController;
