import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
	const [renderBall, setRenderBall] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [ballPosition,setBallPosition] = useState({
		left: "0px",
		top: "0px",
	});

	const reset = () => {
		setRenderBall(false);
		updateXY(0,0);
	};

	const start = () => {
		setRenderBall(true);
	}

	const renderChoice = () => {
		return renderBall ? 
			(
				<div className="ball" style={{
					position: 'absolute',
					left: ballPosition.left,
					top: ballPosition.top
				}}></div>
			) : <button onClick={start} className="start">Start</button>;
	};

	const updateXY = (newX,newY) => {
		setX(newX);
		setY(newY);
		setBallPosition({
			left: newX + 'px',
			top: newY + 'px'
		});
	}

  useEffect(() => {
		const kListener = (evt) => {

		if(renderBall) {
			if(evt.keyCode === 37){
				updateXY(x-5, y);
			}else if(evt.keyCode === 38){
				updateXY(x, y-5);
			}else if(evt.keyCode === 39){
				updateXY(x+5, y);
			}else if(evt.keyCode === 40){
				updateXY(x, y+5);
			}
		}
	};
	
	document.addEventListener("keydown", kListener);
	
	return () => document.removeEventListener("keydown", kListener);
  })

	return (
		<div className="playground">
			<button onClick={reset} className="reset">
				Reset
			</button>
			{renderChoice()}
		</div>
	);
};

export default App;
