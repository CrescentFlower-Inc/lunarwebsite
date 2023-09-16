import styles from '../Shared/App.module.css';
import Navbar from "../Shared/Navbar";

function Home() {
  return (
	<div class={styles.App}>
		<Navbar />
		<h2>Welcome to The Lunarian Federation</h2>
 	</div>
  );
}

export default Home;
