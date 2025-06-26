import { useState, useEffect } from "react";
function Tutorial() {
	const [randColor, setRandColor] = useState([
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
		GenerateRandomColor(),
	]);

	function GenerateRandomColor() {
		return [
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 255),
		];
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setRandColor([
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
				GenerateRandomColor(),
			]);
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="tut-div">
			<h1>
				How To Play{" "}
				<span
					style={{
						color: `rgb(${randColor[0][0]}, ${randColor[0][1]}, ${randColor[0][2]})`,
					}}
				>
					P
				</span>
				<span
					style={{
						color: `rgb(${randColor[1][0]}, ${randColor[1][1]}, ${randColor[1][2]})`,
					}}
				>
					i
				</span>
				<span
					style={{
						color: `rgb(${randColor[2][0]}, ${randColor[2][1]}, ${randColor[2][2]})`,
					}}
				>
					x
				</span>
				<span
					style={{
						color: `rgb(${randColor[3][0]}, ${randColor[3][1]}, ${randColor[3][2]})`,
					}}
				>
					e
				</span>
				<span
					style={{
						color: `rgb(${randColor[4][0]}, ${randColor[4][1]}, ${randColor[4][2]})`,
					}}
				>
					l
				</span>
				<span
					style={{
						color: `rgb(${randColor[5][0]}, ${randColor[5][1]}, ${randColor[5][2]})`,
					}}
				>
					T
				</span>
				<span
					style={{
						color: `rgb(${randColor[6][0]}, ${randColor[6][1]}, ${randColor[6][2]})`,
					}}
				>
					r
				</span>
				<span
					style={{
						color: `rgb(${randColor[7][0]}, ${randColor[7][1]}, ${randColor[7][2]})`,
					}}
				>
					a
				</span>
				<span
					style={{
						color: `rgb(${randColor[8][0]}, ${randColor[8][1]}, ${randColor[8][2]})`,
					}}
				>
					i
				</span>
				<span
					style={{
						color: `rgb(${randColor[9][0]}, ${randColor[9][1]}, ${randColor[9][2]})`,
					}}
				>
					l
				</span>
			</h1>
			<br></br>
			<h2>1. Watch The Sequence</h2>
			<ul>
				<li>A pattern of colors will flash on the screen.</li>
				<br></br>
				<li>Pay attention to the order!</li>
			</ul>
			<br></br>
			<h2>2. Repeat The Pattern</h2>
			<ul>
				<li>Click the color tiles in the same order they were shown.</li>
			</ul>
			<br></br>
			<h2>Ready To Test Challenge Your Brain With This Colorful Experience?</h2>
			<button type="button" onClick={() => window.location.reload()}>
				Click To Start
			</button>
		</div>
	);
}

export default Tutorial;
