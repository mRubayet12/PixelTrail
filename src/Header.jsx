function Header() {
	function GenerateRandomColor() {
		var c = Math.floor(Math.random() * 255);
		return c;
	}
	return (
		<header className="header">
			<h1 className="header-text">
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					P
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					i
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					x
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					e
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					l
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					T
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					r
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					a
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					i
				</span>
				<span
					style={{
						color: `rgb(${GenerateRandomColor()}, ${GenerateRandomColor()}, ${GenerateRandomColor()})`,
					}}
				>
					l
				</span>
			</h1>
		</header>
	);
}

export default Header;
