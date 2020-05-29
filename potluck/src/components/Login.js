// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import * as yup from 'yup';

// const formSchema = yup.object().shape({
// 	name: yup.string().required('Name is a required'),
// 	lastname: yup.string().required('Last Name is a required'),
// 	email: yup.string().required('email is required')
// });

// const initialFormState = {
// 	name: '',
// 	lastname: '',
// 	email: ''
// };

// const initialErrorState = {
// 	name: '',
// 	lastname: '',
// 	email: ''
// };

// function LoginForm() {
// 	//state for form
// 	const [ formState, setFormState ] = useState(initialFormState);

// 	//state for errors
// 	const [ errors, setErrors ] = useState(initialErrorState);

// 	//state for button
// 	const [ buttonDisabled, setButtonDisabled ] = useState(true);

// 	//state for post
// 	const [ post, setPost ] = useState([]);

// 	//input change -- Event handlers
// 	const inputChange = (e) => {
// 		e.persist();
// 		const newFormData = {
// 			...formState,
// 			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
// 		};

// 		validateChange(e);
// 		setFormState(newFormData);
// 	};
// 	//button disabled
// 	useEffect(
// 		() => {
// 			formSchema.isValid(formState).then((valid) => {
// 				setButtonDisabled(!valid);
// 			});
// 		},
// 		[ formState ]
// 	);
// 	//validate changes
// 	const validateChange = (e) => {
// 		yup
// 			.reach(formSchema, e.target.name)
// 			.validate(e.target.value)
// 			.then((valid) => {
// 				setErrors({
// 					...errors,
// 					[e.target.name]: ''
// 				});
// 			})
// 			.catch((err) => {
// 				setErrors({
// 					...errors,
// 					[e.target.name]: err.errors[0]
// 				});
// 			});
// 	};
// 	//on submit
// 	const formSubmit = (e) => {
// 		e.preventDefault();
// 		axios
// 			.post('API key here', formState)
// 			.then((res) => {
// 				setPost(res.data);
// 				console.log('success', post);
// 				console.log(res.data.date);
// 				setFormState(initialFormState);
// 			})
// 			.catch((err) => console.log('get a better API', err.response));
// 	};

// 	return (
// 		<form>
// 			<label htmlFor="nameInput">
// 				<br />

// 				<input id="nameInput" type="name" name="name" placeholder="Name" />
// 			</label>
// 			<label htmlFor="emailInput">
// 				<br />

// 				<input id="emailInput" type="email" name="email" placeholder="Email" />
// 			</label>
// 			<label htmlFor="passwordInput">
// 				<br />

// 				<input id="passwordInput" type="password" name="password" placeholder="Password" />
// 			</label>

// 			<br />

// 			<label htmlFor="termsInput">
// 				Do you agree to the terms and conditions?
// 				<input id="termsInput" type="checkbox" name="terms" />
// 			</label>

// 			<br />

// 			<button name="submit" disabled={buttonDisabled}>
// 				Register
// 			</button>
// 		</form>
// 	);
// }

// export default LoginForm;
