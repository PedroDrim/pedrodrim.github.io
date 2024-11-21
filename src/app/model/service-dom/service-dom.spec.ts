import { faX } from '@fortawesome/free-solid-svg-icons';
import { ServiceDOM } from './service-dom';

describe('ServiceDOM', () => {
  it('1. Devera ser instanciado corretamente com parametros validos', () => {
    let instance = new ServiceDOM(faX, "title", "text");
    expect(instance).toBeTruthy();
  });

  it('2. Devera obter o valor de "icon" corretamente', () => {
    let instance = new ServiceDOM(faX, "title", "text");
    expect(instance.icon).toEqual(faX);
  });

  it('3. Devera obter o valor de "title" corretamente', () => {
    let instance = new ServiceDOM(faX, "title", "text");
    expect(instance.title).toEqual("title");
  });

  it('3. Devera obter o valor de "text" corretamente', () => {
    let instance = new ServiceDOM(faX, "title", "text");
    expect(instance.text).toEqual("text");
  });
});
