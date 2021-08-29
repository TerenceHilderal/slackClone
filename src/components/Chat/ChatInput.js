import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../../Firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
	// const inputRef = useRef(null); one way to do it

	const [input, setInput] = useState('');
	console.log(input);
	const sendMessage = (e) => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}
		db.collection('rooms').doc(channelId).collection('messages').add({
			// message: inputRef.current.value, one way to do it
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: 'Master',
			userImage: 'blabla',
		});
		setInput('');
	};

	return (
		<ChatInputContainer>
			<form action=''>
				<input
					// ref={inputRef} one way to get value from the input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type='text'
					placeholder={`Message #${channelName}`}
				/>
				<Button hidden type='submit' onClick={sendMessage}>
					Send
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
		outline: none;
	}

	> form > button {
		display: none !important;
	}
`;