import { useNavigate } from "@solidjs/router";

function Account() {
	const navigate = useNavigate();
	navigate("/login", { replace: true });
}

export default Account;
