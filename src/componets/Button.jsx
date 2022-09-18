import React from "react";

const Button = ({ className, randomColor, getRandomAll }) => {
	return (
		<button
			onClick={getRandomAll}
			className={`${className}`}
			style={{ backgroundColor: `${randomColor}` }}>
			&#62;
		</button>
	);
};

export default Button;
