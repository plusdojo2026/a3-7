import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import './LayoutComponent.css'

let LayoutComponent = ({children}) => {
    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <main className="main">
            {children}
            </main>
            <FooterComponent></FooterComponent>
        </div>
    );
};
export default LayoutComponent;

// App.jsxに後で追加
{/* <Route index element={<LayoutComponent><Login></Login></LayoutComponent>}></Route> */}