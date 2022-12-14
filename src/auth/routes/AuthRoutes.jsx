import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export default () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to={"/auth/login"} />} />
        </Routes>
    );
}