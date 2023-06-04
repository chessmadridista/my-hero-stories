import LoginInputs from "./components/LoginInputs";
import LoginButtons from "./components/LoginButtons";
import LoginThirdPartyOptions from "./components/LoginThirdPartyOptions";
import { Card, CardHeader } from "@mui/material";

function Login(): JSX.Element {
    return (
        <Card sx={{ padding: 2 }}>
            <CardHeader title="Login" sx={{ color: "blue" }} />
            <LoginInputs />
            <LoginButtons />
            <LoginThirdPartyOptions />
        </Card>
    );
}

export default Login;