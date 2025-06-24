import ColorTile from "./ColorTile";
import React, { useState, useEffect } from "react";

function UserChoices(props) {
	const [done, setDone] = useState(false);
	const [isClicked, setIsClicked] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const [colorsClicked, setColorsClicked] = useState([]);
	const [tileIndex, setTileIndex] = useState([]);
	const [result, setResult] = useState("Correct");

	function Check() {
		for (let i = 0; i < colorsClicked.length; i++) {
			if (props.sequence[i][0] !== colorsClicked[i][0]) {
				setResult("Wrong");
				setDone(true);
				return;
			}
		}
		if (colorsClicked.length === 4) {
			setDone(true);
		}
	}
	function RecordUserClick(index, color) {
		for (let i = 0; i < tileIndex.length; i++) {
			if (tileIndex[i] === index) {
				return null;
			}
		}
		setTileIndex((prev) => [...prev, index]);
		setColorsClicked((prev) => [...prev, color]);
		const newArray = [...isClicked];
		newArray[index] = true;
		setIsClicked(newArray);
		console.log(tileIndex);
	}
	useEffect(() => {
		if (tileIndex.length === 4) {
			Check();
		}
	}, [tileIndex]);

	return (
		<>
			{!done && (
				<div className="display-seq-block">
					<div className="user-choice-color-row">
						<div
							onClick={() => RecordUserClick(0, props.color[0])}
							style={{
								border: isClicked[0]
									? "3px solid red"
									: `3px solid rgb(${props.color[0][0]}, ${props.color[0][1]}, ${props.color[0][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[0]} />
						</div>
						<div
							onClick={() => RecordUserClick(1, props.color[1])}
							style={{
								border: isClicked[1]
									? "3px solid red"
									: `3px solid rgb(${props.color[1][0]}, ${props.color[1][1]}, ${props.color[1][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[1]} />
						</div>
						<div
							onClick={() => RecordUserClick(2, props.color[2])}
							style={{
								border: isClicked[2]
									? "3px solid red"
									: `3px solid rgb(${props.color[2][0]}, ${props.color[2][1]}, ${props.color[2][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[2]} />
						</div>
						<div
							onClick={() => RecordUserClick(3, props.color[3])}
							style={{
								border: isClicked[3]
									? "3px solid red"
									: `3px solid rgb(${props.color[3][0]}, ${props.color[3][1]}, ${props.color[3][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[3]} />
						</div>
						<div
							onClick={() => RecordUserClick(4, props.color[4])}
							style={{
								border: isClicked[4]
									? "3px solid red"
									: `3px solid rgb(${props.color[4][0]}, ${props.color[4][1]}, ${props.color[4][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[4]} />
						</div>
						<div
							onClick={() => RecordUserClick(5, props.color[5])}
							style={{
								border: isClicked[5]
									? "3px solid red"
									: `3px solid rgb(${props.color[5][0]}, ${props.color[5][1]}, ${props.color[5][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[5]} />
						</div>
						<div
							onClick={() => RecordUserClick(6, props.color[6])}
							style={{
								border: isClicked[6]
									? "3px solid red"
									: `3px solid rgb(${props.color[6][0]}, ${props.color[6][1]}, ${props.color[6][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[6]} />
						</div>
						<div
							onClick={() => RecordUserClick(7, props.color[7])}
							style={{
								border: isClicked[7]
									? "3px solid red"
									: `3px solid rgb(${props.color[7][0]}, ${props.color[7][1]}, ${props.color[7][2]})`,
								borderRadius: "24px",
							}}
						>
							<ColorTile color={props.color[7]} />
						</div>
					</div>
				</div>
			)}
			{tileIndex.length == 4 && done && (
				<div className="result-block">
					<h1 className="result-text">{result}!</h1>
					<button
						className="restart-button"
						onClick={() => window.location.reload()}
					>
						Play Again!
					</button>
				</div>
			)}
		</>
	);
}

export default UserChoices;
