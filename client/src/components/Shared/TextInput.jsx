import { splitProps } from 'solid-js';
import styles from './Forms.module.css';

function TextInput(props) {
	const [, inputProps] = splitProps(props, ["label", "signal", "setSignal", "name"])

	const onInput = (e) => {
		let val = e.currentTarget.value;
		let copy = props.signal();

		copy[props.name] = val;
		props.setSignal(copy)
	}

	return (
		<div class={styles.TextInput}>
			<label>{props.label}</label>
			<input {...inputProps} onInput={onInput}/>
			<p/>
		</div>
	)
}

export default TextInput;
