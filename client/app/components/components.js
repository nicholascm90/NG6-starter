import angular from 'angular';
import Contacts from './contacts/contacts';
import ContactForm from './contactForm/contactForm';
import ContactListItem from './contactListItem/contactListItem';

let componentModule = angular.module('app.components', [
  Contacts, 
  ContactForm, 
  ContactListItem
])

.name;

export default componentModule;
