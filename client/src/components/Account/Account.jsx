import { useNavigate } from "@solidjs/router";

function Account() {
	if (!document.cookie.includes("token=")) {
		const navigate = useNavigate();
		navigate("/login", { replace: true });
	}

	return (
		<h1>You're logged in!</h1>
	)
}

export default Account;
