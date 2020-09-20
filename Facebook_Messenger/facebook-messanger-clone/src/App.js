import React, { useState, useEffect, forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState('');

	// useState = varivale in REACT
	// useEffect = run code on a condition

	useEffect(() => {
		// run once when the app component loads
		db.collection('messages')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	useEffect(() => {
		setUsername(prompt('Please enter your name'));
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();

		db.collection('messages').add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};

	return (
		<div className="App">
			<img
				src="https://www.hipaaguide.net/wp-content/uploads/2018/05/Facebook_Messenger.png"
				width="100"
				height="100"
			/>
			<h1>Hello Facebook</h1>
			<h2>Welcome {username}</h2>

			<form className="app__form">
				<FormControl className="app_formControl">
					<Input
						className="app_input"
						placeholder="Enter a message..."
						value={input}
						onChange={(event) => {
							setInput(event.target.value);
						}}
					/>
					<IconButton
						className="app_iconButton"
						disabled={!input}
						type="submit"
						variant="contained"
						color="primary"
						onClick={sendMessage}
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>
			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	);
}

export default App;
