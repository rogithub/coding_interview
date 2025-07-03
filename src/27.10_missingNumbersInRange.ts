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

  //   *                <-i 
  // 9,10,11,12,13
  // i=10     left=2
  //     *                  <-l            
  // 6,9,12,15,18, L1 R2  bounds [9 - 13] res 10,11,12,13
  let left = l;
  for(let i = low; i <= high; i++) {
    if (arr[left] === i) {
      left++;      
      continue;
    }

    res.push(i);

  }


  //console.log(`starting points ${arr}, L${l} R${r}  bounds [${low} - ${high}] res ${res}`);

  return res;
};
