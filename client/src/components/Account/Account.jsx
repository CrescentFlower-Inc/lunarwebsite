import { useNavigate } from '@solidjs/router';

//const navigate = useNavigate();

function Account() {
	const navigate = useNavigate();

	if (!document.cookie) {
		navigate = useNavigate();
		window.location = "/login";
	}
	return <span> Logged in!!! </span>;
}

export default Account;
