import React, { useEffect, useState, useRef } from 'react';

function App(params) {
	const [number, setNumber] = useState(48);

	return (
		<div>
			<h1>количество: {number}</h1>
			<button
				className="btn btn-primary"
				onClick={() => {
					setNumber((prev) => prev + 1);
				}}
			>
				Добавить
			</button>
			<button
				className="btn btn-secondary"
				onClick={() => {
					setNumber((prev) => prev - 1);
				}}
			>
				УБрать
			</button>
		</div>
	);
}
export default App;
