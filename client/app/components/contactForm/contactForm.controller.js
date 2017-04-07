class contactFormController {
  constructor(contactList, $location, $stateParams) {
    "ngInject"
    this.location = $location;
    this.stateParams = $stateParams;  
    this.contacts = contactList;  
    this.firstName; 
    this.lastName; 
    this.email; 
    this.phone; 
    this.phonePattern = '[0-9]{3,11}'; 

    if(this.contacts.getContact(this.stateParams.contactId)) {
      let contact = this.contacts.getContact(this.stateParams.contactId); 
      this.firstName = contact.firstName; 
      this.lastName = contact.lastName; 
      this.email = contact.email; 
      this.phone = contact.phone; 
      this.id = contact.id; 
    }
  }

  getContactData() {
    return {
      id: this.id,
      firstName: this.firstName, 
      lastName: this.lastName, 
      email: this.email, 
      phone: this.phone
    }
  }

  saveContact() {
    this.contacts.saveContact(this.getContactData()).then(() => {
        this.location.path('/'); 
    }); 
  }

  deleteContact() {
    this.contacts.deleteContact(this.getContactData()).then(() => {
        this.location.path('/'); 
    }); 
  }
  
  cancel() {
    this.location.path('/'); 
  }
}

export default contactFormController;
