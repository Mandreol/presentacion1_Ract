import React from "react";
import Button from "./Button";
import Comillas from "./Comillas";

const QuoteBoxText = ({ randomQuotes, randomColor, getRandomAll }) => {
	return (
		<article className="card" style={{ color: randomColor }}>
			<Comillas randomColor={randomColor} />
			<p className="card__quote">{randomQuotes.quote}</p>
			<h1 className="card__author">{randomQuotes.author}</h1>
			<Button
				randomColor={randomColor}
				className={"card__btn"}
				getRandomAll={getRandomAll}
			/>
		</article>
	);
};

export default QuoteBoxText;
