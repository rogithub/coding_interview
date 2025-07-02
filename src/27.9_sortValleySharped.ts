/**
 * A valley-sharped array is an array of integers such that 
 * 1. it can be split into a non-empty prefix and a non-empty suffix,
 * 2. the prefix is sorted in decresing order (duplicates allowed), and
 * 3. the suffix is sorted in increasing order (duplicates allowed).
 * 
 * Given a valley-shaped array, arr, return a new array with the elements sorted.
 **/
export const sortValleyShaped = (arr: number[]): number[] => {
    
    if (arr.length <= 1) return arr;
    if (arr.length == 2) {
        return arr[0] < arr[1] ? arr : [arr[1], arr[0]];
    }
    
    const res: number[] = [];
    // find center
    let l = 0;
    let r = 1;
    while(arr[l] >= arr[r] && r < arr.length) {
        l++;
        r++;
    }

    //console.log(`${arr} center L${l} R${r}`)


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

    
    return res;
};



