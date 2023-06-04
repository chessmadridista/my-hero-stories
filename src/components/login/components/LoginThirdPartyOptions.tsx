import { AccountCircle, Apple, Facebook, Google } from "@mui/icons-material";
import { Grid } from "@mui/material";

function LoginThirdPartyOptions(): JSX.Element {
    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                   <Google sx={{ color: "blue" }} />
                </Grid>
                <Grid item xs={4}>
                   <Facebook sx={{ color: "blue" }} />
                </Grid>
                <Grid item xs={4}>
                   <Apple sx={{ color: "blue" }} />
                </Grid>
            </Grid>
        </>
    );
}

export default LoginThirdPartyOptions;