/**
 * Function that returns two numbers that add up to target.
 *
 * @param {Array} arr Array of numbers.
 * @param {number} target target.
 * @returns {Array} Array of the two numbers that add up to target,
 * or empty when no numbers add up to target
 */

function twoNumEqualTarget(arr, target){

    // O(n^2) Time complexity
    // O(1) Space complexity

    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i],arr[j]]  
            }    
        }
    }
    

    // More optimal solution

    // O(nlog(n)) Time complexity
    // O(1) Space complexity
  
    // arr.sort((a, b) => a - b)
    
    // let startIdx = 0
    // let endIdx =  arr.length - 1
    
    // while(startIdx < endIdx){

    //     if(arr[startIdx] + arr[endIdx] === target){
    //         return [arr[startIdx],arr[endIdx]]
    //     }
    //     else if(arr[startIdx] + arr[endIdx] < target){
    //         startIdx++
    //     }
    //     else if(arr[startIdx] + arr[endIdx] > target){
    //         endIdx--
    //     }
    // }

    return [] 

}

const result = twoNumEqualTarget([1,9,11,15],11)
console.log(result)