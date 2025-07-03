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

  let i = 0;
  let value = 0;
  let inside = false;
  let lastAdded = low;
  while(value < high) {
    value = arr[i];
    inside = value >= low && value <= high;

    if (!inside) {
      i++;
      continue;
    }        
    
    if (value > lastAdded) {
      for (let j = value + 1; j < lastAdded; j++) {
        res.push(j);
      }
    }
    lastAdded = res[res.length -1]

    i++;
  }

  console.log(`${arr} - ${res}`)
  return res;
};
