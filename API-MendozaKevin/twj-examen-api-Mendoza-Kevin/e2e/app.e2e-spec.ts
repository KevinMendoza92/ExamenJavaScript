import { TwjExamenApiMendozaKevinPage } from './app.po';

describe('twj-examen-api-mendoza-kevin App', () => {
  let page: TwjExamenApiMendozaKevinPage;

  beforeEach(() => {
    page = new TwjExamenApiMendozaKevinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
