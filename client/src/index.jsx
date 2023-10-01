/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import styles from './components/Shared/App.module.css';
import Navbar from "./components/Shared/Navbar";
import Home from './components/Home/Home';
import Test from './components/Test/Test';

import Register from './components/Account/Register';
import Account from './components/Account/Account';

import { Router, Route, Routes } from "@solidjs/router";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
	() => (
		<Router>
			<div class={styles.App}>
				<Navbar/>
				<Routes>
					<Route path="/" component={Home} />
					<Route path="/duck" component={Test} />
					<Route path="/account" component={Account} />
					<Route path="/register" component={Register} />
				</Routes>
			</div>
		</Router>
	),
	root
);
