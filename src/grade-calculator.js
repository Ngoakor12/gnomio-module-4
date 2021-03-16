function calculateLetterGrade(numericGrade) {
	try {
		if (numericGrade >= 0.9) {
			return "A";
		} else if (numericGrade >= 0.8) {
			return "B";
		} else if (numericGrade >= 0.7) {
			return "C";
		} else if (numericGrade >= 0.6) {
			return "D";
		} else if (numericGrade < 0.6) {
			return "F";
		} else {
			throw new Error("Input should be a number and not null");
		}
	} catch (e) {
		console.log(e.message);
	}
}
console.log(calculateLetterGrade(6));

module.exports = { calculateLetterGrade };
