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

  // find starting point
  let foundL, foundR = false;
  let l = 0;
  let r = arr.length - 1;
  for(let i = 0; i < arr.length; i++)
  {
      if (arr[l] < low) {
        l++;
      } else {
        foundL = true;
      }
      if (arr[r] > high) {
        r--;
      }else{
        foundR = true;
      }

      if (foundL && foundR) break;
  }

  for(let i = low; i <= high; i++) {
    
  }


  console.log(`starting points ${arr}, L${l} R${r}  bounds [${low} - ${high}]`);

  return res;
};
