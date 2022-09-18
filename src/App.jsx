import "./App.css";
import QuoteBox from "./componets/QuoteBox";
import { useState } from "react";
import quotes from "./json/quotes.json";
import colors from "./utils/colors";

function App() {
	const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
	const firstQuote = quotes[getRandomIndex(quotes)];
	const firstColor = colors[getRandomIndex(colors)];
	const [randomQuotes, setRandomQuotes] = useState(firstQuote);
	const [randomColor, setRandomColor] = useState(firstColor);

	const getRandomAll = () => {
		setRandomQuotes(quotes[getRandomIndex(quotes)]);
		setRandomColor(colors[getRandomIndex(colors)]);
	};

	return (
		<div className="App" style={{ backgroundColor: randomColor }}>
			<QuoteBox
				randomQuotes={randomQuotes}
				randomColor={randomColor}
				getRandomAll={getRandomAll}
			/>
		</div>
	);
}

export default App;
