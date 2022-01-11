import {memo} from 'react';

const PanelList = (info) =>{
    return(
        <div className="m-p-i-b-v">
            <div className="m-p-i-b-v-i">
                <img src={info.item.images} alt="icon" loading="lazy" className="m-p-i-b-v-p" />
            </div>
            <div className="m-p-i-b-v-t">
                <h1 className="m-p-i-b-v-t-1">{info.item.title}</h1>
            </div>
        </div>
    );
};

export default memo(PanelList);