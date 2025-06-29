
export function index_of(s: string, t: string): number {
    const substring_length = t.length;
    
    for (let i = 0; i < s.length; i++) {
	if ((i + substring_length) > s.length) return -1;

	
	if (t === s.substring(i, i + substring_length))
	    return i;
    }
    
    return -1;
}

export function join_reduce(arr: string[], sepparator: string) : string {
    // using [] instead of string to collect char(s) see comment bellow.
    const result: string[] = [];

    arr.reduce((curr, chunk, i) => {
	curr.push(chunk);

	// if it is not the end
	if (i !== arr.length - 1) {
	    curr.push(sepparator);
	}
	
	return curr;
    }, result);

    return result.join(''); 
	
}

export function join_reduce_str(arr: string[], sepparator: string) : string {    

    return arr.reduce((curr, chunk, i) => {
	// if it is not the end
	return (i !== arr.length - 1) ? curr += chunk : curr += chunk + sepparator;
    }, '');
}

export function join(arr: string[], sepparator: string): string {
    if (arr.length === 0) return '';
    // using array to store chars as per comment on the next function
    const result: string[] = [];

    for(let i = 0; i < arr.length; i++) {	
	const chunk = arr[i];
	result.push(chunk);
	
	// do not add sepparator in the last chunk
	if (i !== arr.length - 1) result.push(sepparator);
    }

    return result.join('');
}

// this function is less efficient than the above one that has result
// as an array. We have here the result in string format to compare
// performance
export function join_slower(arr: string[], sepparator: string): string {
    let result = "";
    if (arr.length === 0) return result;

    for(let i = 0; i < arr.length; i++) {	
	let chunk = arr[i];
	result += chunk;
	
	// cehck if it is last chunk
	if (i !== arr.length - 1) result += sepparator;
    }

    return result;
}


export function split(text: string, char: string) : string[] {
    const result: string[] = [];
    if (text.length === 0) return result;

    // Char array because strings are immutable in JavaScript.
    // ========================================================
    // Having a string here would use higher time complexity since a new string
    // is created each time we append a char.

    // On the opposite hand having an array takes O(1) armonized time per char.
    // So split takes O(len(s)) time total.
    let word: string[] = []; 
        
    for(let i = 0; i < text.length; i++) {
	const isSplit = char === text[i];
	
	if (isSplit) {
	    result.push(word.join(''));
	    word = [];
	} else {
	    word.push(text[i]);
	}
    }
    
    result.push(word.join(''));
    
    return result;
}


