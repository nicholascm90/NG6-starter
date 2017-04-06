import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListItemComponent from './contactListItem.component';

let contactListItemModule = angular.module('contactListItem', [
  uiRouter
])

.component('contactListItem', contactListItemComponent)

.name;

export default contactListItemModule;
