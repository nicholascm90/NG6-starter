import contactFormModule from './contactForm'
import contactFormController from './contactForm.controller';
import contactFormComponent from './contactForm.component';
import contactFormTemplate from './contactForm.html';

describe('contactForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(contactFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new contactFormController();
    };
  }));

  describe('Controller', () => {
    // controller specs
    it('has contact properties firstName, lastName, email, phone, phonePattern', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('firstName');
      expect(controller).to.have.property('lastName');
      expect(controller).to.have.property('email');
      expect(controller).to.have.property('phone');
      expect(controller).to.have.property('phonePattern');
    });
  });
});
