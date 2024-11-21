import { faX } from '@fortawesome/free-solid-svg-icons';
import { SocialDOM } from './social-dom';

describe('SocialDOM', () => {
  it('1. Devera ser instanciado corretamente com parametros validos', () => {
    let instance = new SocialDOM(faX, "#");
    expect(instance).toBeTruthy();
  });

  it('2. Devera obter o valor de "icon" corretamente', () => {
    let instance = new SocialDOM(faX, "#");
    expect(instance.icon).toEqual(faX);
  });

  it('3. Devera obter o valor de "url" corretamente', () => {
    let instance = new SocialDOM(faX, "#");
    expect(instance.url).toEqual("#");
  });
});
