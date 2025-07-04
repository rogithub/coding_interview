import { numbersNotInArr } from "./27.10_missingNumbersInRange";

describe("should find items that are not inside a range", () => {
  describe("from the book", () => {
    it("regular case", () => {
      const arr: number[] = [6, 9, 12, 15, 18];
      const low = 9, high = 13;
      const expected = numbersNotInArr(arr, low, high);

      expect(expected).toEqual([10, 11, 13]);
    });
    

    it("array empty", () => {
      const arr: number[] = [];
      const low = 9, high = 9;
      const expected = numbersNotInArr(arr, low, high);

      expect(expected).toEqual([9]);
    });
    

    it("result empty", () => {
      const arr: number[] = [6,7,8,9];
      const low = 7, high = 8;
      const expected = numbersNotInArr(arr, low, high);

      expect(expected).toEqual([]);
    });

  });

});
