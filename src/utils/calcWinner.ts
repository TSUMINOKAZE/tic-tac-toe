import { winCombinations } from '../constants/winCombinations';

export const calcWinner = (boxes: string[]): string | null => {
	let result: string | null = null;

	winCombinations.forEach((box, idx) => {
		const [boxA, boxB, boxC] = winCombinations[idx];
		if (boxes[boxA] === boxes[boxB] && boxes[boxB] === boxes[boxC] && boxes[boxC] === boxes[boxA]) result = boxes[boxA];
	});

	return result;
};
