import { browser, element, by, Key, protractor } from 'protractor';

describe('Angular Buch', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => /*BS*/browser.waitForAngularEnabled(false)/*BE*/);

  it('should open item list with 7 items', () => {
      browser.get('http://localhost:4200/iteration-7/i18n/home');
      element(by.className('ui red button')).click();
      browser.sleep(1000);
      //access list
      var booklist = element.all(by.tagName('bm-book-list-item'));
      expect(booklist.count()).toBeGreaterThan(1);
  });

  it("should find geheimes Buch", () => {
    browser.get('http://localhost:4200/iteration-7/i18n/home');
    element(by.className('prompt')).sendKeys('geheim');
    element(by.className('prompt')).sendKeys(Key.ENTER);
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(element(by.className('result'))),5000, 'Element taking too long to appear in the DOM');
    expect(element(by.className('result')).getAttribute('text')).toEqual(' Geheimes Buch Das geheime Buch ist nur über die sichere Ressource verfügbar.');
  });

  it('should increase image size on hover', () => {
    browser.get('http://localhost:4200/iteration-7/i18n/books');
    //browser.sleep(1000);

    var img = element.all(by.className('ui tiny image')).get(0);
    expect(img.getAttribute('width')).toEqual('80');
    browser.actions()
      .mouseMove(img).perform();
    browser.sleep(200);
    expect(img.getAttribute('width')).toEqual('150');
  });

  it('should create book', () => {
    browser.get('http://localhost:4200/iteration-7/i18n/admin/create');
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(")
    browser.switchTo().alert().accept();
    var form = element(by.tagName('form'));
    var inputs = form.all(by.tagName('input'));
    var titel = inputs.get(0);
    var untertitel = inputs.get(1);
    var isbn = inputs.get(2);
    var datum = inputs.get(3);
    var autor = inputs.get(4);
    var beschreibung = form.all(by.tagName('textarea')).get(0);
    var url = inputs.get(5);
    var bildTitel = inputs.get(6);
    var submitBtn = form.all(by.tagName('button')).get(2);

    titel.sendKeys('Testtitel');
    untertitel.sendKeys('Eine unerwartete Reise');
    isbn.sendKeys('9999999999');
    autor.sendKeys('J. K. Rowling');
    beschreibung.sendKeys('Es war einmal...');

    browser.wait(EC.elementToBeClickable(submitBtn));
    browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
      submitBtn.click();
    })

    browser.wait(EC.urlIs('http://localhost:4200/iteration-7/i18n/books'),5000,'Booklist did not show up!');
    expect(element.all(by.id('bookItem9999999999')).count()).toEqual(1);
    //expect(element(by.id('bookItem9999999999')).isPresent).toBeTruthy();

    //expect(element(by.id('bookItem9999999999')).getId()).toEqual('bookItem9999999999');
  });

  afterAll(() => /*BS*/browser.waitForAngularEnabled(true)/*BE*/);
});

