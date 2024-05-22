import { Login, Register, Reset } from "@components";
import { Route, Routes } from "react-router-dom";

export function Auth() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset" element={<Reset />} />
        </Routes>
    );
}