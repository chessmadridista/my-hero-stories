import { Grid, TextField } from "@mui/material";

function LoginInputs(): JSX.Element {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <TextField id="username" label="Username" type="text" variant="outlined" />        
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" label="Password" type="password" variant="outlined" />        
                </Grid>
            </Grid>
        </>
    );
}

export default LoginInputs;