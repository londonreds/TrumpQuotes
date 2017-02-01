import { TrumpQuotePage } from './app.po';

describe('trump-quote App', function() {
  let page: TrumpQuotePage;

  beforeEach(() => {
    page = new TrumpQuotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
