


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
    
    let word = '';    
        
    for(let i = 0; i < text.length; i++) {
	let isSplit = char === text[i];
	word += isSplit ? '' : text[i];
	if (isSplit) {
	    result.push(word);
	    word = '';
	}
    }
    
    result.push(word);
    
    return result;
}




