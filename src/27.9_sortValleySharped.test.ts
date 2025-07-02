import { sortValleyShaped } from "./27.9_sortValleySharped";

describe("should be one sorted array", () => {
  describe("base cases", () => {
    it("Not repeats pair length", () => {
      const arr: number[] = [8, 4, 2, 6];
      const expected = sortValleyShaped(arr);

      expect(expected).toEqual([2, 4, 6, 8]);
    });
  });
});
