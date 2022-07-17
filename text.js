// function solution(words, query) {
//   return words.filter(item => item.includes(query));
// }; 

// // console.log(solution(["ana", "santi", "nico", "anastasia"], "an"));

// console.log(solution(["ana", "santi", "nico", "anastasia"], "xyz"));

// function solution(numbers) {
//   return numbers.reduce((a, b) => a + b)
// }; 

// console.log(solution([2, 4, 8]));


// let newList = [1, 2, 3].push(4);
// console.log( newList);
// console.log(newList.push(5)); 


// function solution(cards) {
// 	let rta = cards.includes('AS');
// 	(rta === true) ? rta = 'AS' : false
// 	return rta;
// }; 

// function solution(cards){
//   const rta = cards.find((item) => item === 'AS');
//   return rta || false;
// }; 

// console.log(solution(['diamonds', 'hearts', 'spades', 'AS']));


function solution(words) {
	const rta = words.findIndex(word => word === 'myKey') 
	return (rta === -1) ? false: rta ;
}; 

console.log(solution(["diamonds", "hearts", "spades","myKey"]));