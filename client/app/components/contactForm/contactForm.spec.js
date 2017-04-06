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

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(contactFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = contactFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(contactFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(contactFormController);
      });
  });
});
