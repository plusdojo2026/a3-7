import HeaderComponent from "./HeaderComponent";

let LayoutComponent = ({children}) => {
    return(
        <div>
            <HeaderComponent></HeaderComponent>
            {children}
        </div>
    );
};
export default LayoutComponent;