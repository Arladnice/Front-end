import React, { useEffect, useState, useRef } from 'react';

function App() {
	const [counter, setCounter] = useState(0);
	const [name, setName] = useState('Denis');
	const [age, setAge] = useState(20);

	// function increment() {
	// 	setCounter(counter + 1);
	// }

	function decrement() {
		setCounter(counter - 1);
	}

	function increment() {
		setCounter((prevCounter) => {
			return prevCounter + 1;
		});
	}

	function changeName(params) {
		setName('Другое имя...');
	}

	function changeAge(params) {
		setAge('Другой возраст...');
	}
	return (
		<div>
			<p>Число: {counter}</p>
			<button onClick={increment} className="btn btn-primary">
				Плюс
			</button>
			<button onClick={decrement} className="btn btn-secondary">
				Плюс
			</button>
			<pre>{JSON.stringify(name, null, 2)}</pre>
			<pre>{JSON.stringify(age, null, 2)}</pre>
			<button onClick={changeName} className="btn btn-danger">
				Изменить имя
			</button>
			<button onClick={changeAge} className="btn btn-danger">
				Изменить года
			</button>
		</div>
	);
}

export default App;
