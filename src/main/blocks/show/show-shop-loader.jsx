import {memo} from 'react';
import GetHistoryLocation from "../../../locate";

const ShowShopLoader = () => {
    return(
        <div className="b-m">
                    <div className="i">
                        <div className="i-m">
                        <div className="i-m-p">
                            <div className="skeleton i-m-i"></div>
                        </div>
                        </div>
                        <div className="b-t-p">
                                <div className="z-c-pb">
                                    <div className="skeleton z-c"></div>
                                    <div className="skeleton p-t"></div>
                                </div>
                                <div className="p">
                                    <div className="t-p">
                                    <div className="t-p-b">
                                        <div className="i-g">
                                        <div className="skeleton i-g-p"></div>
                                        <div className="t-t-p">
                                            <div className="skeleton t-t"></div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="t-p2">
                                    <div className="t-p-b">
                                        <div className="i-g">
                                        <div className="skeleton i-g-p"></div>
                                        <div className="t-t-p">
                                            <div className="skeleton t-t"></div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <div className="p-r">
                        <div className="skeleton h"></div>
                        <button type="button" className="p-r-b"><img src={GetHistoryLocation+"/images/loader.svg"} alt="" loading="lazy" className="show-button-loader" /></button>
                        </div>
                    </div>
                    </div>
    );
};

export default memo(ShowShopLoader);