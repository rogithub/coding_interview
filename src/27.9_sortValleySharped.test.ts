import { sortValleyShaped } from "./27.9_sortValleySharped";

describe("should be one sorted array", () => {
  describe("base cases", () => {
    
    it("should work for even length", () => {
      const arr: number[] = [8, 4, 2, 6];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([2, 4, 6, 8]);
    });

    it("should work for odd length", () => {
      const arr: number[] = [8, 4, 1, 2, 6];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([1, 2, 4, 6, 8]);
    });


    it("should work for one element", () => {
      const arr: number[] = [-1];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([-1]);
    });


    it("should work for empty array", () => {
      const arr: number[] = [];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([]);
    });

    it("should work for repeated odd elements", () => {
      const arr: number[] = [8,4,4,-1,0,3,3,6,7];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([-1, 0, 3, 3, 4, 4, 6, 7, 8]);
    });

    it("should work for repeated even elements", () => {
      const arr: number[] = [4,3,3,3,3,5];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([3,3,3,3,4,5]);
    });

    it("shold work when the valley is not at the center", () => {
       const arr: number[] = [2,2,1,1];
       const expected = sortValleyShaped(arr);

       expect(expected).toEqual([1,1,2,2]);
    });    

    it("shold work when the valley is not at the center", () => {
       const arr: number[] = [1,2];
       const expected = sortValleyShaped(arr);

       expect(expected).toEqual([1,2]);
    });


    it("finding center", () => {
       const arr: number[] = [0, 1,2];
       const expected = sortValleyShaped(arr);

       expect(expected).toEqual([0,1,2]);
    });



  });

});
