import { CssBaseline, ThemeProvider } from "@mui/material";
import { purpleTheme } from "./";

export const AppTheme = ({ children }) => {

    return (
        <ThemeProvider theme={purpleTheme}>
            { children }
            <CssBaseline />
        </ThemeProvider>
    );
}