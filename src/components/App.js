import React, { Component, useEffect, useState, useRef } from "react";
import "../styles/App.css";

const App = () => {
	const [renderBall, setRenderBall] = useState(false);
	const [showStartButton, setShowStartButton] = useState(true);
	
	const [x, setX] = useState(0);
	const xRef = useRef(x);
	const setXRef = data => {
		xRef.current = data;
		setX(data);
	}

	const [y, setY] = useState(0);
	const yRef = useRef(y);
	const setYRef = data => {
		yRef.current = data;
		setY(data);
	}

	const [ballPosition,setBallPosition] = useState({
		left: "0px",
		top: "0px",
	});
	const reset = () => {
		setBallPosition({ left: '0px', top: '0px' });
		setShowStartButton(true);
		setRenderBall(false);
	};
	const renderChoice = () => {};

	const start = (event) => {
		event.preventDefault();
		setRenderBall(true);
		setShowStartButton(false);
	}

	useEffect(() => {

		window.addEventListener('keydown', (event) => {

			// right 39
			// down 40
			// up 38
			// left 37

			switch (event.keyCode) {
				case 37:
					setXRef(xRef.current - 5);
					break;
				case 38:
					setYRef(yRef.current - 5);
					break;
				case 39:
					setXRef(xRef.current + 5);
					break;
				case 40:
					setYRef(yRef.current + 5);
					break;
			}

			setBallPosition({ left: xRef.current, top: yRef.current });	

		});
		
	}, []);

	return (
		<div className="playground">
			{showStartButton ? <button onClick={start} className="start">Start</button> : null}
			<button onClick={reset} className="reset">
				Reset
			</button>
			{renderBall ? <div className="ball" style={ballPosition}></div> : null}
			{renderChoice()}
		</div>
	);
};

export default App;
