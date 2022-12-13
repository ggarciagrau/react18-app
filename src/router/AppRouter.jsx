import { Routes, Route } from "react-router-dom";

import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";

export default () => {
    return (
        <Routes>

            {/* Login and register */}
            <Route path="/auth/*" element={<AuthRoutes />}/>

            {/* JournalApp */}
            <Route path="/*" element={<JournalRoutes />}/>

        </Routes>
    )
}