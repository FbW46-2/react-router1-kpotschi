import React, { useState, useRef } from 'react';
import UserForm from './UserForm';
import SimpleReactValidator from 'simple-react-validator';
import './Contact.css';

const Contact = () => {
	const validator = useRef(new SimpleReactValidator());

	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userMessage, setUserMessage] = useState('');
	const [, forceUpdate] = useState();
	const [messageSent, setMessageSent] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		if (validator.current.allValid()) {
			setMessageSent(true);
		} else {
			validator.current.showMessages(true);
			forceUpdate(1);
		}
	};

	if (messageSent) {
		return <div>Message has been sent!</div>;
	} else {
		return (
			<UserForm
				userMessage={userMessage}
				setUserMessage={setUserMessage}
				validator={validator}
				userName={userName}
				setUserName={setUserName}
				userEmail={userEmail}
				setUserEmail={setUserEmail}
				submitHandler={submitHandler}
			/>
		);
	}
};

export default Contact;
