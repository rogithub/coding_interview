import { toOneSorted } from "./27.8_pointers";

describe("should be one sorted array", () => {
  describe("empty arrays produce empty array", () => {
    it("should be [1,2,3]", () => {
      const arr1: number[] = [];
      const arr2: number[] = [];
      const arr3: number[] = [];
      const expected = toOneSorted(arr1, arr2, arr3);

      expect(expected).toEqual([]);
    });
  });

  describe("3 arrays same lenght", () => {
    it("should be [1,2,3]", () => {
      const arr1: number[] = [1];
      const arr2: number[] = [2];
      const arr3: number[] = [3];
      const expected = toOneSorted(arr1, arr2, arr3);

      expect(expected).toEqual([1, 2, 3]);
    });
  });

  describe("3 arrays different lenghts", () => {
    it("should be [0,1,2,3,4,5]", () => {
      const arr1: number[] = [1, 2];
      const arr2: number[] = [3, 3, 4, 5];
      const arr3: number[] = [0, 1, 2, 2, 2];
      const expected = toOneSorted(arr1, arr2, arr3);

      expect(expected).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });
});
