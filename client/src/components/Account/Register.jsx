import styles from '../Shared/Forms.module.css';
import TextInput from '../Shared/TextInput';
import { splitProps, createSignal } from "solid-js";


function Register () {
	let [form, setForm] = createSignal({"username": "", "email": "", "password": "", "confirm": ""})

	const handleSubmit = (e) => {
		console.log(form());
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
