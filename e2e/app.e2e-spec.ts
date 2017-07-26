import { HrmClientPage } from './app.po';

describe('hrm-client App', () => {
  let page: HrmClientPage;

  beforeEach(() => {
    page = new HrmClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
