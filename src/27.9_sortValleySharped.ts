/**
 * A valley-sharped array is an array of integers such that 
 * 1. it can be split into a non-empty prefix and a non-empty suffix,
 * 2. the prefix is sorted in decresing order (duplicates allowed), and
 * 3. the suffix is sorted in increasing order (duplicates allowed).
 * 
 * Given a valley-shaped array, arr, return a new array with the elements sorted.
 **/
export const sortValleyShaped = (arr: number[]): number[] => {
    const res: number[] = [];
    if (arr.length === 0) res;

    // [8, 4, 2, 6]
    // [2, 4, 6, 8]
    let r = arr.length - 1;
    let l = 0;
    // center
    if (arr.length % 2 === 0) {
        let c = arr.length / 2;
        l = c;
        r = c + 1;        
    } else {
        let c = (arr.length - 1) / 2;
        l = c - 1;
        r = c + 1;
        res.push(arr[c]); // min val
    }


    while(l > -1 || r < arr.length) {
        if (l > -1 && r < arr.length) {
            if (arr[l] > arr[r]) {
                res.push(arr[r]);
                r++;                
            } else {
                res.push(arr[l]);                
                l--;
            }
            continue;
        }

        if (l > -1) {
            res.push(arr[l]);
            l--;
        }

        if (r < arr.length) {
            res.push(arr[r]);
            r++;  
        }       
    }

    console.log(arr);
    console.log(res);
    

    return res;
};
