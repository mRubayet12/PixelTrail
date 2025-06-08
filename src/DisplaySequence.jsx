import ColorTile from "./ColorTile";
import React, { useState, useEffect } from "react";

function DisplaySequence(props) {
	useEffect(() => {
		if (props.timer > 0) {
			const timeout = setTimeout(() => {
				props.setTimer((prev) => prev - 1);
			}, 1000);

			return () => clearTimeout(timeout);
		}
	}, [props.timer]);

	return (
		<div className="display-seq-block">
			<h2 className="timer">Time Remaining: {props.timer}</h2>
			<div className="color-row">
				<ColorTile color={props.color[0]} />
				<ColorTile color={props.color[1]} />
				<ColorTile color={props.color[2]} />
				<ColorTile color={props.color[3]} />
			</div>
		</div>
	);
}

export default DisplaySequence;
