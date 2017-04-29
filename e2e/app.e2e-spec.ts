import { USNamesPage } from './app.po';

describe('us-names App', () => {
  let page: USNamesPage;

  beforeEach(() => {
    page = new USNamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
