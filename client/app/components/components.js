import angular from 'angular';
import About from './about/about';
import Contacts from './contacts/contacts';
import ContactForm from './contactForm/contactForm';
import ContactListItem from './contactListItem/contactListItem';

let componentModule = angular.module('app.components', [
  About, 
  Contacts, 
  ContactForm, 
  ContactListItem
])

.name;

export default componentModule;
