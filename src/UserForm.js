import React from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({
	userName,
	userMessage,
	userEmail,
	submitHandler,
	setUserName,
	setUserEmail,
	setUserMessage,
	validator,
}) => {
	return (
		<div className='d-flex justify-content-center'>
			<Form onSubmit={submitHandler} className='w-50'>
				<Form.Group className='mt-3' controlId='groupFormUserName'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						onChange={(e) => setUserName(e.target.value)}
						name='formUserName'
						type='text'
					/>
					{validator.current.message(
						'formUserName',
						userName,
						'required|alpha'
					)}
				</Form.Group>
				<Form.Group className='mt-3' controlId='groupFormUserEmail'>
					<Form.Label>E-Mail</Form.Label>
					<Form.Control
						onChange={(e) => setUserEmail(e.target.value)}
						name='formUserEmail'
						type='text'
					/>
					{validator.current.message(
						'formUserEmail',
						userEmail,
						'required|email'
					)}
				</Form.Group>
				<Form.Group className='mt-3' controlId='groupFormUserMessage'>
					<Form.Label>Message</Form.Label>
					<Form.Control
						onChange={(e) => setUserMessage(e.target.value)}
						name='formUserMessage'
						as='textarea'
						rows={3}
					/>
					{validator.current.message(
						'formUserMessage',
						userMessage,
						'required|min:20'
					)}
				</Form.Group>
				<div className='d-flex justify-content-between'>
					<Button className='mt-3' variant='primary' type='submit'>
						Submit
					</Button>

					<span
						className='mt-3'
						style={
							userMessage.length < 20 ? { color: 'red' } : { color: 'green' }
						}
					>{`${userMessage.length} / 20`}</span>
				</div>
			</Form>
		</div>
	);
};

export default UserForm;
