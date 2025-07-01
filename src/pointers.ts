
/**
 * Given a sorted array of integers, return whether there are two distinct
 * indices, i and j, such arr[i] + arr[j] = 0.
 * 
 * Do not use more than O(n) extra space.
 **/
export const sumZero = (arr: number[]) : boolean => {
    let j = arr.length - 1;
    let i = 0;
    while (j > 0) {
	
	// same as item in the opposite end
	if ( i !== j && arr[i] + arr[j] === 0 ) return true;

	// same as its neighbor item
	if ( arr[i] + arr[i + 1] === 0 || arr[j] + arr[j - 1] === 0 ) return true;
	
	j--;
	i++;
    }
    
    return false;
}

