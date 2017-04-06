import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Contacts from './contacts/contacts';
import NewContact from './newContact/newContact';
import ContactListItem from './contactListItem/contactListItem';

let componentModule = angular.module('app.components', [
  Home,
  About, 
  Contacts, 
  NewContact, 
  ContactListItem
])

.name;

export default componentModule;
