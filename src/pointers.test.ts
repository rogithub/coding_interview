import { sumZero } from './pointers';

describe('Items in array doubled pointered', () => {
  describe('different indices sum zero', () => {
      it('should be true [-5, -2, -1, 1, 1, 10]', () => {
	  const arr = [-5, -2, -1, 1, 1, 10];
	  const expected = sumZero(arr);

	  expect(expected).toBe(true);
      });
  });
    
  describe('different indices sum zero', () => {
      it('should be true [-3, 0, 0, 1, 2]', () => {
	  const arr = [-3, 0, 0, 1, 2];
	  const expected = sumZero(arr);

	  expect(expected).toBe(true);
      });
  });

  describe('different indices sum zero', () => {
      it('should be false [-5, -3, -1, 0, 2, 4, 6]', () => {
	  const arr = [-5, -3, -1, 0, 2, 4, 6];
	  const expected = sumZero(arr);

	  expect(expected).toBe(false);
      });
  });

  describe('different indices sum zero', () => {
      it('should be false [-5, -3, -1, 0, 3, 4, 6]', () => {
	  const arr = [-5, -3, -1, 0, 3, 4, 6];
	  const expected = sumZero(arr);

	  expect(expected).toBe(true);
      });
  });


  describe('different indices sum zero', () => {
      it('should be true [-5, -3, -1, 0, 3, 4, 5]', () => {
	  const arr = [-5, -3, -1, 0, 3, 4, 5];
	  const expected = sumZero(arr);

	  expect(expected).toBe(true);
      });
  });

  describe('different indices sum zero', () => {
      it('should be true [-5, 5]', () => {
	  const arr = [-5, 5];
	  const expected = sumZero(arr);

	  expect(expected).toBe(true);
      });
  });

  describe('different indices sum zero', () => {
      it('should be false [1,2,3,4,5]', () => {
	  const arr = [1,2,3,4,5];
	  const expected = sumZero(arr);

	  expect(expected).toBe(false);
      });
  });

  describe('different indices sum zero', () => {
      it('should be false [0]', () => {
	  const arr = [0];
	  const expected = sumZero(arr);

	  expect(expected).toBe(false);
      });
  });

  describe('different indices sum zero', () => {
      it('should be false []', () => {
	  const arr:number[] = [];
	  const expected = sumZero(arr);

	  expect(expected).toBe(false);
      });
  });

});


