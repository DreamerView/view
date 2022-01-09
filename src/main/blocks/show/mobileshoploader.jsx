import React from 'react';
import GetHistoryLocation from "../../../locate";

const MobileShopLoader = ()=> {
    return(
        <div className="mobile-shop-info">
            <div className="mobile-shop-info-block-1">
                <div className="mobile-shop-info-block-item-1">
                    <div className="mobile-shop-info-block-item-p-1">
                        <div className="skeleton mobile-shop-info-block-item-i-1-loader"/>
                    </div>
                </div>
                <div className="mobile-shop-info-block-item-2">
                    <div className="skeleton mobile-shop-info-block-item-title-loader"/>
                    <div className="skeleton mobile-shop-info-block-item-content-1-loader"/>
                    <div className="skeleton mobile-shop-info-block-item-content-2-loader"/>
                </div>
            </div>
            <div className="mobile-shop-info-block-2">
                <div className="mobile-shop-info-block-2-item-1">
                    <div className="mobile-shop-info-block-2-item-1-picture">
                        <div className="skeleton mobile-shop-info-block-2-item-1-image-loader" />
                    </div>
                    <div className="skeleton mobile-shop-info-block-2-item-1-text-loader"/>
                </div>
                <div className="mobile-shop-info-block-2-item-1">
                    <div className="mobile-shop-info-block-2-item-1-picture">
                        <div className="skeleton mobile-shop-info-block-2-item-1-image-loader" />
                    </div>
                    <div className="skeleton mobile-shop-info-block-2-item-1-text-loader"/>
                </div>
            </div>
            <div className="mobile-shop-info-block-2">
                <div className="mobile-shop-info-block-3-item-1">
                    <div className="skeleton mobile-shop-info-block-3-item-1-text-loader"/>
                </div>
                <div className="mobile-shop-info-block-3-item-1">
                    <div className="mobile-shop-info-block-3-item-1-block">
                        <button className="mobile-shop-info-block-2-item-1-button" type="button">
                        <img src={GetHistoryLocation+"/images/loader.svg"} alt="" loading="lazy" className="show-button-loader" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MobileShopLoader);