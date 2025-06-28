


export function performanceMs(fn: () => void): number {
    const start = performance.now();
    fn();
    const end = performance.now();
  
    return end - start;
};

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function getRndmStr(length: number): string {
    const items: string[] = [];
    for(let i = 0; i < length; i++) {
	items.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }

    return items.join('');
}

export function getRndmStrArr(arrLen: number, strMaxLen: number): string[] {
    const items: string[] = [];
    for(let i = 0; i < arrLen; i++) {
	items.push(getRndmStr(Math.floor(Math.random() * strMaxLen)));
    }

    return items;
}


