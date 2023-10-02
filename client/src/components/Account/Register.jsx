import styles from '../Shared/Forms.module.css';
import TextInput from '../Shared/TextInput';
import { splitProps, createSignal } from "solid-js";


function Register () {
	let [form, setForm] = createSignal({"username": "", "email": "", "password": "", "confirm": ""})

	const handleSubmit = async (e) => {
		let inputs = form();
		if (inputs.username===""||inputs.password===""||inputs.confirm===""||inputs.email==="") {
			alert("Please fill in all fields")
			return;
		}

		if (inputs.confirm !== inputs.password) {
			alert("Passwords don't match!");
			return;
		}
		let resp = await fetch("/api/account/register", {
			method: "POST",
			body: JSON.stringify({"username": inputs.username, "email": inputs.email, "password": inputs.password})
		})

		if (resp.status !== 200) {
			alert('Ooops! Something went wrong!');
			return;
		}

		alert("Registration successful!")
		console.log(resp.json());
	}



	return <>
		<h2>Registration</h2>

		<iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
		<form class={styles.Form} target="dummyframe">
			<TextInput label="Username" placeholder="Enter in your username" signal={form} setSignal={setForm} name="username" />

			<TextInput label="Email" placeholder="Enter in your email here" signal={form} setSignal={setForm} name="email" />

			<TextInput label="Password" placeholder="Enter in your password" signal={form} setSignal={setForm} name="password" />

			<TextInput label="Confirm Password" placeholder="Retype your password" signal={form} setSignal={setForm} name="confirm" />

			<button onclick={handleSubmit}>Register!</button>
		</form>
	</>;
}


export default Register;
