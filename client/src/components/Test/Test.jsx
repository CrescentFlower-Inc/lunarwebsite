import styles from '../Shared/App.module.css';
import Navbar from "../Shared/Navbar";

function Test() {
  return (
	<div class={styles.App}>
		<Navbar />
		<h2>i quack...</h2>
 	</div>
  );
}

export default Test;
