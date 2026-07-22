import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import './layout.css'

function Layout({children}) {
    return(
        <>
        <main className="main">
            <Outlet></Outlet>
        </main>
        <FooterComponent></FooterComponent>
        </>
    );
}

export default Layout;