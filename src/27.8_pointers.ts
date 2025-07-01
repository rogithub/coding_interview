
/**
 * Given 3 sorted arrays, return new array with the elements
 * of all 3 arrays, in sorted orderm, without duplicates
 **/
export const sumZero = (arr1: number[], arr2: number[], arr3: number[]) : number[] => {
    const res: number[] = [];

    if (arr1.length === arr2.length === arr3.length === 0) return res;
    
    let i1 = arr1.length;
    let i2 = arr2.length;
    let i3 = arr3.length;
    
    let imax = Math.max(Math.max(i1, i2), i3);
    for(let i = 0; i < imax; i++) {
	
    }
}

