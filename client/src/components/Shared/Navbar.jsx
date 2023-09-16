import styles from "./Navbar.module.css";

function NavbarElement(props) {
	let style = styles.NavbarElement
	let url = new URL(window.location.href)

	if (url.pathname == props.path) { style = styles.NavbarElementSelected }

	return (
		<span class={style}>
			<a href={props.path}> {props.name}</a>
		</span>
	);
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
			<NavbarElement name="Account" path="/account" />
		</div>
	);
}

export default Navbar;
