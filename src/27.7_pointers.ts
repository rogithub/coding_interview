
/**
 * Given a sorted array of integers, return whether there are two distinct
 * indices, i and j, such arr[i] + arr[j] = 0.
 * 
 * Do not use more than O(n) extra space.
 **/
export const sumZero = (arr: number[]) : boolean => {
    let right = arr.length - 1;
    let left = 0;
    while (left < right) {

	if (arr[left] + arr[right] === 0) return true;

	if (arr[left] + arr[right] > 0) {
	    right--;
	} else {
	    left++;
	}
	
	
    }
    
    return false;
}

