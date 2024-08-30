function firstNonRepeatedChar(str) {
 // Write your code here
	let frequencyMap = {};

	for(let i = 0; i < str.length; i ++)
		{
			let char = str[i];
			if (frequencyMap[char]) {
				frequencyMap[char]++;
			}else
				frequencyMap[char] = 1
		}
}

for(let i = 0; i < str.length; i++)
	{
		let char = str[i];
		if (frequencyMap[char] === 1) {
			return char;
		}
	}

retun null;
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 







