import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

//form schema
const formSchema = yup.object().shape({
	name: yup.string().required('Name is a required'),
	lastname: yup.string().required('Last Name is a required'),
	email: yup.string().required('email is required'),
	date: yup.string().required('You must pick a date'),
	food: yup.boolean().defined(),
	drinks: yup.boolean().defined(),
	utensils: yup.boolean().defined(),
	dessert: yup.boolean().defined(),
	specInstr: yup.string().notRequired()
});

const initialFormState = {
	name: '',
	lastname: '',
	email: '',
	date: '',
	food: false,
	drinks: false,
	utensils: false,
	dessert: false,
	specInstr: ''
};

const initialErrorState = {
	name: '',
	lastname: '',
	email: '',
	date: '',
	food: '',
	drinks: '',
	utensils: '',
	dessert: '',
	specInstr: ''
};

export default function Form() {
	//state for form
	const [ formState, setFormState ] = useState(initialFormState);

	//state for errors
	const [ errors, setErrors ] = useState(initialErrorState);

	//state for button
	const [ buttonDisabled, setButtonDisabled ] = useState(true);

	//state for post
	const [ post, setPost ] = useState([]);

	//input change -- Event handlers
	const inputChange = (e) => {
		e.persist();
		const newFormData = {
			...formState,
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		};

		validateChange(e);
		setFormState(newFormData);
	};
	//button disabled
	useEffect(
		() => {
			formSchema.isValid(formState).then((valid) => {
				setButtonDisabled(!valid);
			});
		},
		[ formState ]
	);
	//validate changes
	const validateChange = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: ''
				});
			})
			.catch((err) => {
				setErrors({
					...errors,
					[e.target.name]: err.errors[0]
				});
			});
	};
	//on submit
	const formSubmit = (e) => {
		e.preventDefault();
		axios
			.post('API key here', formState)
			.then((res) => {
				setPost(res.data);
				console.log('success', post);
				console.log(res.data.date);
				setFormState(initialFormState);
			})
			.catch((err) => console.log('get a better API', err.response));
	};
	// return the form
	return (
		<form onSubmit={formSubmit}>
			<p>Create the perfect potluck...</p>
			<label htmlFor="name">
				<br />
				<input
					type="text"
					name="name"
					id="nameinput"
					placeholder="Name"
					value={formState.name}
					onChange={inputChange}
				/>
			</label>

			<label htmlFor="lastname">
				<br />
				<input
					type="text"
					name="lastname"
					id="nameinput"
					placeholder=" Last name"
					value={formState.lastname}
					onChange={inputChange}
				/>
			</label>

			<label htmlFor="email">
				<br />
				<input
					type="text"
					name="email"
					id="nameinput"
					placeholder=" Email "
					value={formState.email}
					onChange={inputChange}
				/>
			</label>
			<br />
			<label htmlFor="date">
				<p>When is the potluck?</p>
				<br />
				<select name="date" id="dateinput" onChange={inputChange}>
					<option name="default" value={null} />
					<option name="Today" value="Today">
						Today
					</option>
					<option name="Tomorrow" value="Tomorrow">
						Tomorrow
					</option>
					<option name="Never" value="Never">
						Never
					</option>
				</select>
			</label>
			<br />

			<div className="foodcheck">
				<p>What are ya' bringing to the table?</p>

				<br />

				<label htmlFor="food">
					<input
						type="checkbox"
						name="food"
						id="foodCheckBox"
						checked={formState.food}
						onChange={inputChange}
					/>
					Food
				</label>

				<br />

				<label htmlFor="drinks">
					<input
						type="checkbox"
						name="drinks"
						id="drinksCheckBox"
						checked={formState.drinks}
						onChange={inputChange}
					/>
					Drinks
				</label>

				<br />

				<label htmlFor="utensils">
					<input
						type="checkbox"
						name="utensils"
						id="utensilsCheckBox"
						checked={formState.utensils}
						onChange={inputChange}
					/>
					Utensils
				</label>

				<br />

				<label htmlFor="dessert">
					<input
						type="checkbox"
						name="dessert"
						id="dessertCheckBox"
						checked={formState.dessert}
						onChange={inputChange}
					/>
					Dessert
				</label>
				<br />
			</div>

			<br />

			<div className="special">
				<label htmlFor="Special Instructions">
					<p>If you checked "food", please be specific</p>
					<br />
					<br />
					<textarea
						name="specInstr"
						id="specInstrInput"
						placeholder=""
						value={formState.specInstr}
						onChange={inputChange}
					/>
				</label>
			</div>

			<br />

			<button name="submit" disabled={buttonDisabled}>
				Submit
			</button>
			
		</form>
	);
}


