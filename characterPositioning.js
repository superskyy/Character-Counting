// Character Positioning
function countLetters(str) {
	var string = str;
	var letterPosition = {};
	
	for (var i = 0; i < string.length; i++) {
		var char = string[i]
		if (char !== " ") {
			if (letterPosition[char]) {
			letterPosition[char].push(i);
			} else {
			letterPosition[char] = [i];
			}
		}
	}
	console.log(letterPosition);
}
countLetters("lighthouse in the house");

