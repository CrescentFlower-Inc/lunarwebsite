import styles from "./Navbar.module.css";

function NavbarElement(props) {
	if (props.buffer) {
		return (
			<span class={styles.NavbarElementBuffer}>
				nig
			</span>
		)
	}

	return (
		<span class={styles.NavbarElement}>
			{props.name}
		</span>
	);
}

function Navbar() {
	return (
		<div class={styles.Navbar}>
			<NavbarElement name="test" />
			<NavbarElement name="penis" />
			<NavbarElement buffer="true" />
		</div>
	);
}

export default Navbar;
