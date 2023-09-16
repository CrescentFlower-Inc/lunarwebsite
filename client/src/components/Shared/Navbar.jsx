import styles from "./Navbar.module.css";

function NavbarElement(props) {
	return (
		<span class={styles.NavbarElement}>
			{props.name}
		</span>
	);
}

function NavbarSpace(props) {
	return <span class={styles.NavbarSpace}></span>
}

function Navbar() {
	return (
		<div class={styles.Navbar}>
			<NavbarElement name="test" />
			<NavbarElement name="penis" />
			<NavbarSpace />
			<NavbarElement name="account"/>
		</div>
	);
}

export default Navbar;
