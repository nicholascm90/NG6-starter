import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormComponent from './contactForm.component';

let contactFormModule = angular.module('contactForm', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject"; 
  $stateProvider
    .state('contactForm', {
      url: '/new', 
      component: 'contactForm'
    })
    .state('editContact', {
      url: '/edit/:contactId',
      component: 'contactForm'
    });
})

.component('contactForm', contactFormComponent)

.name;

export default contactFormModule;
