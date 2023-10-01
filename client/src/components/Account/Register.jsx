import styles from '../Shared/Forms.module.css';
import TextInput from '../Shared/TextInput';
import { splitProps } from "solid-js";


function Register () {
	const handleSubmit = (e) => {
		alert("DUCK!!")
	}


	return <>
		<h2>Registration</h2>

		<iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
		<form class={styles.Form} target="dummyframe">
			<TextInput label="Username" placeholder="Enter in your username"/>

			<TextInput label="Email" placeholder="Enter in your email here"/>

			<TextInput label="Password" placeholder="Enter in your password"/>

			<TextInput label="Confirm Password" placeholder="Retype your password"/>

			<button onclick={handleSubmit}>Register!</button>
		</form>
	</>;
}


export default Register;
