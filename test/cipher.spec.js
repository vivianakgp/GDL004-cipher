
global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      //escribe aquí tus test
      expect(cipher.encode(33,"A BCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("H IJKLMNOPQRSTUVWXYZABCDEFG");
    });
  
  });
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
     //escribe aquí tus test
     expect(cipher.decode(33,"H IJKLMNOPQRSTUVWXYZABCDEFG")).toBe( "A BCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    
  });
});
