import template from './contactListItem.html';
import controller from './contactListItem.controller';
import './contactListItem.scss';

let contactListItemComponent = {
  restrict: 'E',
  bindings: {
    contact: '<'
  },
  template,
  controller
};

export default contactListItemComponent;
