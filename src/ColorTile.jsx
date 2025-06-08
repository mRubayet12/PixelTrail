function ColorTile(props) {
	return (
		<div
			style={{
				backgroundColor: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`,
				height: "100px",
				width: "100px",
			}}
			className="color-tile"
		></div>
	);
}

export default ColorTile;
