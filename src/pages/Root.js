import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";





function RootLayout() {
    return (
           <>
           <NavBar />
           <Outlet />
           </>
        );

}
export default RootLayout;