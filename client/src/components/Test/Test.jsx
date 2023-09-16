import styles from '../Shared/App.module.css';
import Navbar from "../Shared/Navbar";

function Test() {
  return (
	<div class={styles.App}>
		<Navbar />
		<h2>i quack...</h2>
		<p style="height:300vh">balls</p>
		<p>too much balls</p>
 	</div>
  );
}

export default Test;
