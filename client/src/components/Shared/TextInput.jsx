import { splitProps } from 'solid-js';
import styles from './Forms.module.css';

function TextInput(props) {
	const [, inputProps] = splitProps(props, ["label"])

	return (
		<div class={styles.TextInput}>
			<label>{props.label}</label>
			<input {...inputProps}/>
			<p/>
		</div>
	)
}

export default TextInput;
