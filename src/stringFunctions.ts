
export function index_of(s: string, t: string): number {
    const substring_length = t.length;
    
    for (let i = 0; i < s.length; i++) {
	if ((i + substring_length) > s.length) return -1;

	
	if (t === s.substring(i, i + substring_length))
	    return i;
    }
    
    return -1;
}

export function join_reduce(arr: string[], sepparator: string) {
    return arr.reduce((result, chunk, i) => {
	return i === arr.length - 1 ? result + chunk : result + chunk + sepparator
    }, "");
}

export function join(arr: string[], sepparator: string): string {
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
    let result: Array<string> = [];
    if (text.length === 0) return result;

    // Char array because strings are immutable in JavaScript.
    // ========================================================
    // Having a string here would use higher time complexity since a new string
    // is created each time we append a char.

    // On the opposite hand having an array takes O(1) armonized time per char.
    // So split takes O(len(s)) time total.
    let word = []; 
        
    for(let i = 0; i < text.length; i++) {
	let isSplit = char === text[i];
	
	if (isSplit) {
	    result.push(join(word, ''));
	    word = [];
	} else {
	    word.push(text[i]);
	}
    }
    
    result.push(join(word, ''));
    
    return result;
}


