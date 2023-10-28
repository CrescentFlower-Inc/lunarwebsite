import { useNavigate } from "@solidjs/router";

function Account() {
	alert(document.cookie);

	const navigate = useNavigate();
	navigate("/login", { replace: true });
}

export default Account;
