class contactFormController {
  constructor(contactList, $location, $stateParams) {
    "ngInject"
    this.location = $location;
    this.stateParams = $stateParams;  
    this.contacts = contactList;  
    // if it doesnt have state param (is 'new'), then don't set the values
    this.firstName; 
    this.lastName; 
    this.email; 
    this.phone; 
  
    // if it has state param URL and finds the contact, set values
    if(this.contacts.getContact(this.stateParams.contactId)) {
      let contact = this.contacts.getContact(this.stateParams.contactId); 
      this.firstName = contact.firstName; 
      this.lastName = contact.lastName; 
      this.email = contact.email; 
      this.phone = contact.phone; 
      this.id = contact.id; 
    }
    // if it has state param url and doesn't find contact, redirect 404
    console.log(this.stateParams); 
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
  findOrcontactForm() {
    if(this.stateParams.contactId) {
      return this.contacts.getContactData(this.stateParams); 
    } else {
      return false; 
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
