


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




