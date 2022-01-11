import {memo} from 'react';

const ProductInfo = (info) => {
    return(
        <div className="flex">
            <div className="b-1-pic">
                <img loading="lazy" className="b1-img" src={info.item.images} alt="Panakea Show" />
            </div>
            <div className="text">
                <h1 className="b1-t1">{info.item.title}</h1>
                <h1 className="b1-t2">{info.item.content}</h1>
            </div>
        </div>
    );
};

export default memo(ProductInfo);