import ContactListItemModule from './contactListItem'
import ContactListItemController from './contactListItem.controller';
import ContactListItemComponent from './contactListItem.component';
import ContactListItemTemplate from './contactListItem.html';

describe('ContactListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactListItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactListItemController();
    };
  }));
  
  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has firstName, lastName, phone, email in the template', () => {
      expect(ContactListItemTemplate).to.match(/{{\s?\$ctrl\.contact\.firstName\s?}}/g);
      expect(ContactListItemTemplate).to.match(/{{\s?\$ctrl\.contact\.lastName\s?}}/g);
      expect(ContactListItemTemplate).to.match(/{{\s?\$ctrl\.contact\.phone\s?}}/g);
      expect(ContactListItemTemplate).to.match(/{{\s?\$ctrl\.contact\.email\s?}}/g);
    });
  });

});
