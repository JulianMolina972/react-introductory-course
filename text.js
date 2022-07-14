// function solution(words, query) {
//   return words.filter(item => item.includes(query));
// }; 

// // console.log(solution(["ana", "santi", "nico", "anastasia"], "an"));

// console.log(solution(["ana", "santi", "nico", "anastasia"], "xyz"));

function solution(numbers) {
  return numbers.reduce((a, b) => a + b)
}; 

console.log(solution([2, 4, 8]));