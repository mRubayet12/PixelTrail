import Game from "./Game";
import Header from "./Header";
import Footer from "./Footer";
import Tutorial from "./Tutorial";
import { useState } from "react";

function App() {
	const [tutorial, setTutorial] = useState(false);
	return (
		<>
			{!tutorial && (
				<>
					<Header setTutorial={setTutorial}></Header>
					<Game></Game>
					<Footer></Footer>
				</>
			)}
			{tutorial && <Tutorial></Tutorial>}
		</>
	);
}

export default App;
