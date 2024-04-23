/*

Problem Statement:

You are given an array of integers representing the prices of a stock over a certain period. 
You need to write a function maxProfit to find the maximum profit that can be achieved by buying
 and selling the stock at most once. If no profit can be achieved, return 0.


 Instructions:

Implement the maxProfit function to find the maximum profit achievable by buying and selling the stock once.
You can assume that the input array prices will contain at least two elements.
You need to return an integer representing the maximum profit. If no profit can be achieved, return 0.

Constraints:

The length of the input array prices will be at most 10^5.
The elements in the prices array will be integers ranging from 0 to 10^4.

*/

const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5 (Buy at 1 and sell at 6)

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0 (No profit can be made)


/**
 * @param {number[]} prices - Array of integers representing stock prices
 * @return {number} Maximum profit achievable by buying and selling the stock once
 */
function maxProfit(prices) {
    // Your code here
}
