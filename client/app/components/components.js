import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Contacts from './contacts/contacts';
import NewContact from './newContact/newContact';

let componentModule = angular.module('app.components', [
  Home,
  About, 
  Contacts, 
  NewContact
])

.name;

export default componentModule;
