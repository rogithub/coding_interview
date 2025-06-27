import { split, join, join_reduce, index_of } from './stringFunctions';


describe('String index_of', () => {
  describe('substring contained', () => {
    it('contains the substring', () => {
	expect(index_of('Is it contained here?', 'it contained')).toEqual(3);	
    });
  });

  describe('letter contained', () => {
    it('contains the char', () => {
	expect(index_of('Is it contained here?', '?')).toEqual(20);	
    });
  });

    
  describe('do not contain substring', () => {
    it('should join by ee', () => {
	expect(index_of('¡Hola Mundo!', 'Hello World!')).toEqual(-1);
    });
  });
});


describe('String join', () => {
  describe('join by space', () => {
    it('should join by empty space', () => {
	expect(join(['join', 'by', 'space'], ' ')).toEqual('join by space');
	expect(join_reduce(['join', 'by', 'space'], ' ')).toEqual('join by space');
    });
  });

  describe('join by space', () => {
    it('should join by ee', () => {
	expect(join(['b', '', 'k', '', 'p', 'r n', '', 'd', 'd!!'], 'ee')).toEqual('beeeekeeeepeer neeeedeed!!');
	expect(join_reduce(['b', '', 'k', '', 'p', 'r n', '', 'd', 'd!!'], 'ee')).toEqual('beeeekeeeepeer neeeedeed!!');
    });
  });
});


describe('String split', () => {
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


  describe('split by letter slash', () => {
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
