import UserChoices from "./UserChoices";
import React, { useState, useEffect } from "react";
import DisplaySequence from "./DisplaySequence";

function Game(props) {
	const [timer, setTimer] = useState(5);
	const [sequence, setSequence] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]);
	const [shuffledColorTiles, setShuffledColorTiles] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]);

	function GenerateRandomColor() {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return [r, g, b];
	}

	function GenerateQuestionPattern() {
		let randColor1 = GenerateRandomColor();
		let randColor2 = GenerateRandomColor();
		let randColor3 = GenerateRandomColor();
		let randColor4 = GenerateRandomColor();

		setSequence([randColor1, randColor2, randColor3, randColor4]);

		const colors = [
			randColor1,
			randColor2,
			randColor3,
			randColor4,
			GenerateRandomColor(),
			GenerateRandomColor(),
			GenerateRandomColor(),
			GenerateRandomColor(),
		];

		let randIndex = Math.floor(Math.random() * 8);

		const shuffled = [colors[randIndex]];
		colors[randIndex] = null;

		for (let i = 0; i < 7; i++) {
			randIndex = Math.floor(Math.random() * 8);

			while (colors[randIndex] === null) {
				randIndex = Math.floor(Math.random() * 8);
			}

			shuffled.push(colors[randIndex]);
			colors[randIndex] = null;
		}

		setShuffledColorTiles(shuffled);
	}

	useEffect(() => {
		GenerateQuestionPattern();
	}, []);

	return (
		<>
			{timer > 0 && (
				<DisplaySequence color={sequence} timer={timer} setTimer={setTimer} />
			)}
			{timer === 0 && (
				<UserChoices color={shuffledColorTiles} sequence={sequence} />
			)}
		</>
	);
}

export default Game;
