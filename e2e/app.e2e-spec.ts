import { TravelUiPage } from './app.po';

describe('travel-ui App', () => {
  let page: TravelUiPage;

  beforeEach(() => {
    page = new TravelUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
