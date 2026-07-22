import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";

function Layout({children}) {
    return(
        <>
        <main>
            <Outlet></Outlet>
        </main>
        <FooterComponent></FooterComponent>
        </>
    );
}

export default Layout;