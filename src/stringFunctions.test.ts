import { split } from './stringFunctions';

describe('String Functions', () => {
  describe('split by space', () => {
    it('should split by empty space', () => {
	expect(split('split by space', ' ')).toEqual(['split', 'by', 'space']);
    });
  });

  describe('split by letter e', () => {
    it('should have empty values', () => {
	expect(split('beekeeper needed', 'e')).toEqual(['b','','k','','p','r n','','d','d']);
    });
  });


  describe('split by letter e', () => {
    it('split by / slash', () => {
	expect(split('/home/./..//Documents/', '/')).toEqual(['','home','.','..','','Documents','']);
    });
  });


  describe('split by empty', () => {
    it('split by ? on emtpy string', () => {
	expect(split('', '?')).toEqual([]);
    });
  });


});
