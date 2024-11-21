import { ProjectDOM } from './project-dom';

describe('ServiceDOM', () => {
  it('1. Devera ser instanciado corretamente com parametros validos', () => {
    let instance = new ProjectDOM("#", "title", "text");
    expect(instance).toBeTruthy();
  });

  it('2. Devera obter o valor de "image" corretamente', () => {
    let instance = new ProjectDOM("#", "title", "text");
    expect(instance.image).toEqual("#");
  });

  it('3. Devera obter o valor de "title" corretamente', () => {
    let instance = new ProjectDOM("#", "title", "text");
    expect(instance.title).toEqual("title");
  });

  it('3. Devera obter o valor de "text" corretamente', () => {
    let instance = new ProjectDOM("#", "title", "text");
    expect(instance.text).toEqual("text");
  });
});
