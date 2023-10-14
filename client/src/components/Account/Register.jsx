import config from '../../config';
import styles from '../Shared/Forms.module.css';
import TextInput from '../Shared/TextInput';
import { splitProps, createSignal } from "solid-js";
import { A } from "@solidjs/router";

function Register () {
	let [form, setForm] = createSignal({"username": "", "email": "", "password": "", "confirm": ""})

	const handleSubmit = async (e) => {
		const emailreg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
		let inputs = form();

		const path = "/api/account/register";

		if (inputs.username===""||inputs.password===""||inputs.confirm===""||inputs.email==="") {
			alert("Please fill in all fields")
			return;
		}

		if (!emailreg.test(inputs.email)) {
			alert("Enter in a valid email address!")
			return;
		}

		if (inputs.confirm !== inputs.password) {
			alert("Passwords don't match!");
			return;
		}
		let resp = await fetch( (config.dev ? config.devpath+path : path), {
			method: "POST",
			body: JSON.stringify({"username": inputs.username, "email": inputs.email, "password": inputs.password})
		})

		if (resp.status == 400) {
			let respj = await resp.json();
			alert(respj.error);
			return;
		}
		if (resp.status !== 200) {
			alert('Ooops! Something went wrong!');
			return;
		}

		alert("Registration successful!")
	}



	return <>
		<h2>Registration</h2>

		<iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
		<form class={styles.Form} target="dummyframe">
			<TextInput label="Username" placeholder="Enter in your username" signal={form} setSignal={setForm} name="username" />

			<TextInput type="email" label="Email" placeholder="Enter in your email here" signal={form} setSignal={setForm} name="email" />

			<TextInput type="password" label="Password" placeholder="Enter in your password" signal={form} setSignal={setForm} name="password" />

			<TextInput type="password" label="Confirm Password" placeholder="Retype your password" signal={form} setSignal={setForm} name="confirm" />

			<button onclick={handleSubmit}>Register!</button>
		</form>
		<A href="/login"> Already have an account? </A>
	</>;
}


export default Register;
