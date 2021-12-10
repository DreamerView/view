import { useMediaQuery } from "react-responsive";
import DesktopBasketInfo from "./desktop-info";
import MobileBasketInfo from "./mobile-info";

const Basket = () => {
    const mobile = useMediaQuery({ query: `(max-width: 480px)` });
    return(
        mobile ? <MobileBasketInfo/> : <DesktopBasketInfo/>
    );
};

export default Basket;