import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newContactComponent from './newContact.component';

let newContactModule = angular.module('newContact', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject"; 
  $stateProvider
    .state('newContact', {
      url: '/new', 
      component: 'newContact'
    }); 
})

.component('newContact', newContactComponent)

.name;

export default newContactModule;
