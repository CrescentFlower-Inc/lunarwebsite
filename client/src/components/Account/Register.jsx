import styles from './Forms.module.css';
import { splitProps } from "solid-js";
import { createForm, required } from '@modular-forms/solid';

function TextInput(props) {
	const [, inputProps] = splitProps(props, ["label"])

	return (
		<div class={styles.TextInput}>
			<label>{props.label}</label>
			<input {...inputProps}/>
			<p/>
		</div>
	)
}

function Register () {
	const [loginForm, { Form, Field }] = createForm();

	const handleSubmit = async (values,event) => {
		let obj = {}
		obj.username = values.username
		obj.email = values.email
		obj.password = values.password
		const req = fetch("/api/account/register", {method: "POST", body: JSON.stringify(obj)});
		alert(req.json());
	};

	return <>
		<h2>Registration</h2>

		<Form onSubmit={handleSubmit} class={styles.Form}>
			<Field name="username">
				<TextInput label="Username" placeholder="Enter in your username"/>
			</Field>

			<Field name="email">
				<TextInput label="Email" placeholder="Enter in your email here"/>
			</Field>

			<Field name="password">
				<TextInput label="Password" placeholder="Enter in your password"/>
			</Field>

			<Field name="confirmation">
				<TextInput label="Confirm Password" placeholder="Retype your password"/>
			</Field>

			<button type="submit">Register!</button>
		</Form>
	</>;
}


export default Register;
