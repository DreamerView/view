import { useMediaQuery } from "react-responsive";
import DesktopConfirm from "./desktop-confirm";
import AddConfirm from "./add-confirm";

const CheckConfirm = (info) => {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    return(
        <div>
            {isMobile?<AddConfirm atr={info.item} close={info.close} />:<DesktopConfirm atr={info.item} close={info.close}/>}
        </div>
    );
};

export default CheckConfirm;