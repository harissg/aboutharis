import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
 returbrowser.get('/');
  }

  getMainHeading() {
 returelement(by.css('app-root h1')).getText();
  }
}
