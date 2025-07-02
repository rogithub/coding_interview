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

    it("should work for repeated elements", () => {
      const arr: number[] = [8,4,4,-1,0,3,3,6,7];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([-1, 0, 3, 3, 4, 4, 6, 7, 8]);
    });

  });

});
