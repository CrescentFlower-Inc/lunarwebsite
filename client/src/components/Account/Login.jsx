import config from '../../config';
import styles from '../Shared/Forms.module.css';
import TextInput from '../Shared/TextInput';
import { splitProps, createSignal } from "solid-js";
import { A } from "@solidjs/router";

function Login () {
	let [form, setForm] = createSignal({"username": "", "password": ""})

	const handleSubmit = async (e) => {
		const emailreg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
		let inputs = form();

		const path = "/api/account/login";

		if (inputs.username===""||inputs.password==="") {
			alert("Please fill in all fields")
			return;
		}

		let mode = emailreg.test(inputs.username)

		let resp = await fetch( (config.dev ? config.devpath+path : path), {
			method: "POST",
			body: JSON.stringify({"mode": mode, "username": inputs.username, "password": inputs.password})
		})

		if (resp.status == 401) {
			let respj = await resp.json();
			alert(respj.error);
			return;
		}
		if (resp.status !== 200) {
			alert('Ooops! Something went wrong!');
			return;
		}

		alert("Login Successful!");
	}



	return <>
		<h2>Login</h2>

		<iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
		<form class={styles.Form} target="dummyframe">
			<TextInput label="Username" placeholder="Enter username OR email" signal={form} setSignal={setForm} name="username" />

			<TextInput type="password" label="Password" placeholder="Enter in your password" signal={form} setSignal={setForm} name="password" />

			<button onclick={handleSubmit}>Login</button>
		</form><br/>
		<A href="/register">No account?</A>
	</>;
}


export default Login;
