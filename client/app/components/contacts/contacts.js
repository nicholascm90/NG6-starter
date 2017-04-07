import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';

let contactsModule = angular.module('contacts', [
  uiRouter, 
])

.config(($stateProvider) => {
  "ngInject"; 
  $stateProvider
    .state('contacts', {
      url: '/', 
      component: 'contacts'
    })
})

.component('contacts', contactsComponent)

.name;

export default contactsModule;
