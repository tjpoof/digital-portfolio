import { Outlet } from "react-router-dom";

export const PageWrapper = () => {
    return (
        <div id="page">
            <Outlet />
        </div>
    );
};