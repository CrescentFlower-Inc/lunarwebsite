import styles from './App.module.css';
import Navbar from "./Navbar";

function App() {
  return (
	<div class={styles.App}>
		<Navbar /><br />
		<h2>Welcome to The Lunarian Federation</h2>
	</div>
  );
}

export default App;
