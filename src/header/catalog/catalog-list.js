import {memo} from 'react';

const CatalogList = (info) =>{
    return(
        <div className="panel-s-b">
                <div className="panel-s-b-i">
                  <img src={info.item.images} alt="icon" loading="lazy" className="panel-s-b-p" />
                </div>
                <div className="panel-s-b-t">
                  <h1 className="panel-s-b-t-1">{info.item.title}</h1>
                </div>
              </div>
    );
};

export default memo(CatalogList);