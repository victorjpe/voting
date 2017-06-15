import { VotingPage } from './app.po';

describe('voting App', () => {
  let page: VotingPage;

  beforeEach(() => {
    page = new VotingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
