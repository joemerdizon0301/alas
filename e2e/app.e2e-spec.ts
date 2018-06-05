import { ALASUIPage } from './app.po';

describe('alasui App', () => {
  let page: ALASUIPage;

  beforeEach(() => {
    page = new ALASUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
