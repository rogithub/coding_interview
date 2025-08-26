/**
 * In this problem, we represent an interval
 * as an array of two integers, [start, end],
 * where start <= end. Both endpoints are considered
 * part of the interval, which might consist of 
 * a singular point if start == end.
 * 
 * You are given two arrays of intervals, arr1 and arr2.
 * For each array, the intervals are non-overlapping and
 * sorted from left to right. Return a similar 
 * non-overlapping, sorted array of intervals representing
 * the intersection of the intervals in arr1 and arr2.
 * An interval shouldn't start at the same value
 * where another interval ends.
 * 
 * Example 1:
 * arr1 = [[0,1],[4,6],[7,8]]
 * arr2 = [[2,3],[5,9],[10,11]]
 * output = [[5,6],[7,8]]
 * 
 * Example 2:
 * arr1 = [[2,4],[5,8],[9,12]]
 * arr2 = [[3,3],[4,7]]
 * output = [[3,3],[4,4],[5,7]]
 */

export const intervalIntersection = (arr1: number[][], arr2: number[][]) : number[][] => {
    const result: number[][] = [];
    let i = 0;
    let j = 0;


    return result;
}
    