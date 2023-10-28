import { A } from "@solidjs/router";
import styles from "./Navbar.module.css";

function NavbarElement(props) {
	return (
		<A class={styles.NavbarElement}
			activeClass={styles.NavbarElementSelected}
			href={props.path}
			end={true}>{props.name}
		</A>
	);
}

function NavbarDropdown(props) {
	return (
		<select name={props.name} class={`${styles.NavbarDropdown} ${styles.NavbarElement}`}>
			{props.children}
		</select>
	)
}

function NavbarSpace(props) {
	return <span class={styles.NavbarSpace}></span>
}

function Navbar() {
	return (
		<div class={styles.Navbar}>
			<NavbarElement name="Home" path="/" />
			<NavbarElement name="Test page" path="/duck" />
			<NavbarSpace />
			<NavbarDropdown name="Account">
				<option value="test"> Test </option>
			</NavbarDropdown>
		</div>
	);
}

export default Navbar;
