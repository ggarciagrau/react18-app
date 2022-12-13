import { Routes, Route } from "react-router-dom";
import JournalPage from "../pages/JournalPage";

export default () => {

    return (
        <Routes>
            <Route  path="/" element={<JournalPage />}/>

            <Route path="/*" element={ <Navigate to="/" />}/>
        </Routes>
    );
}