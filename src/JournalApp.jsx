import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { AppTheme } from "./theme";

export default () => {

    return <AppTheme><AppRouter /></AppTheme>;
}