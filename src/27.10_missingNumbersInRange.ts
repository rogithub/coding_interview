/**
 * Given a sorted array of integers, arr, and two values indicating a range, [low, high],
 * with low <= high, return a new array with all the numbers in the range that do not apper in arr.
 * 
 **/
export const numbersNotInArr = (
  arr: number[],
  low: number,
  high: number,
): number[] => {
  const res: number[] = [];
  
  if (arr.length === 0) {
    for(let i = low; i <= high; i++)
    {
      res.push(i);
    }
    return res;
  }

  let i = 0; // array index
  let current = low;
  while(current <= high) {
    if (arr[i] < current) {
      if (current > low && current !== high) { 
        res.push(current);
        current++;
      }
      i++;
      continue;
    }

    if (arr[i] === current)
    {
      current++;
      continue;
    }

    if (arr[i] > current) {
      res.push(current);
      current++;
    }
    
  }

  // console.log(`${arr} - ${res} *** [ ${low} - ${high}]`)
  return res;
};
