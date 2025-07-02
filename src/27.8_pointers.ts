/**
 * Given 3 sorted arrays, return new array with the elements
 * of all 3 arrays, in sorted order, without duplicates
 **/
export const toOneSorted = (
  arr1: number[],
  arr2: number[],
  arr3: number[],
): number[] => {
  const res: number[] = [];

  if (
    arr1.length === arr2.length &&
    arr1.length === arr3.length &&
    arr1.length === 0
  )
    return res;

  let i1 = 0;
  let i2 = 0;
  let i3 = 0;
  let i = 0;

  // 1 2
  // 3 3 4 5
  // 0 1 2 2 2

  // 0 1 2 3 4 5
  let candidates: number[];

  do {
    candidates = [];
    if (i1 < arr1.length) {
      candidates.push(arr1[i1]);
    }
    if (i2 < arr2.length) {
      candidates.push(arr2[i2]);
    }
    if (i3 < arr3.length) {
      candidates.push(arr3[i3]);
    }

    let min = Math.min(...candidates);

    if (min === arr1[i1]) i1++;
    if (min === arr2[i2]) i2++;
    if (min === arr1[i3]) i3++;

    if (res.length === 0 || res[res.length - 1] < min) {
      res.push(min);
    }
  } while (candidates.length > 0);

  return res;
};
