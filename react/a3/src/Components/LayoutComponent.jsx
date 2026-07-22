import { Outlet } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import './LayoutComponent.css'

let LayoutComponent = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            {/* <main className="main">
            {children}
            </main> */}
            <main className="main">
                <Outlet></Outlet>
            </main>
            <FooterComponent></FooterComponent>
        </div>
    );
};
export default LayoutComponent;

// App.jsxに後で追加
{/* <Route index element={<LayoutComponent><Login></Login></LayoutComponent>}></Route> */ }