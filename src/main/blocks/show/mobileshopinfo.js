import GetHistoryLocation from "../../../locate";
import { useParams } from "react-router-dom";

const MobileShopInfo = (info) => {
    const {id} = useParams();
    return(
        <div className="mobile-shop-info">
            <div className="mobile-shop-info-block-1">
                <div className="mobile-shop-info-block-item-1">
                    <div className="mobile-shop-info-block-item-p-1">
                        <img className="mobile-shop-info-block-item-i-1" src={info.item.images} alt="Panakea 2" />
                    </div>
                </div>
                <div className="mobile-shop-info-block-item-2">
                    <h1 className="mobile-shop-info-block-item-title">{info.item.title}</h1>
                    <h1 className="mobile-shop-info-block-item-content">{info.item.adress}</h1>
                </div>
            </div>
            <div className="mobile-shop-info-block-2">
                <div className="mobile-shop-info-block-2-item-1">
                    <div className="mobile-shop-info-block-2-item-1-picture">
                        <img className="mobile-shop-info-block-2-item-1-image" src={GetHistoryLocation+"/images/clock.svg"} alt="Panakea Show" loading="lazy" />
                    </div>
                    <h1 className="mobile-shop-info-block-2-item-1-text">{info.item.time}</h1>
                </div>
                <div className="mobile-shop-info-block-2-item-1">
                    <div className="mobile-shop-info-block-2-item-1-picture">
                        <img className="mobile-shop-info-block-2-item-1-image" src={info.item.icon} alt="Panakea Show" loading="lazy" />
                    </div>
                    <h1 className="mobile-shop-info-block-2-item-1-text">{info.item.status}</h1>
                </div>
            </div>
            <div className="mobile-shop-info-block-2">
                <div className="mobile-shop-info-block-3-item-1">
                    <h1 className="mobile-shop-info-block-3-item-1-text">{info.item.price}</h1>
                </div>
                <div className="mobile-shop-info-block-3-item-1">
                    <div className="mobile-shop-info-block-3-item-1-block">
                        <button onClick={()=>{info.create({id:Date.now(),key:id,item:1,from:info.item.title})}} className="mobile-shop-info-block-2-item-1-button" type="button">Выбрать</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileShopInfo;