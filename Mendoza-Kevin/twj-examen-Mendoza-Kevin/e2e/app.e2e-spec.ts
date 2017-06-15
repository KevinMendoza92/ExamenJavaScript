import { TwjExamenMendozaKevinPage } from './app.po';

describe('twj-examen-mendoza-kevin App', () => {
  let page: TwjExamenMendozaKevinPage;

  beforeEach(() => {
    page = new TwjExamenMendozaKevinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
