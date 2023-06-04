import LoginInputs from "./components/LoginInputs";
import LoginButtons from "./components/LoginButtons";
import LoginThirdPartyOptions from "./components/LoginThirdPartyOptions";
import { Card } from "@mui/material";

function Login(): JSX.Element {
    return (
        <Card>
            <LoginInputs />
            <LoginButtons />
            <LoginThirdPartyOptions />
        </Card>
    );
}

export default Login;