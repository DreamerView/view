import React from 'react';

const ProductInfoLoader = () => {
    return(
        <div>
        <div className="flex">
          <div className="b-1-pic">
            <div className="skeleton b1-img" />
          </div>
          <div className="text">
            <div className="skeleton b1-t1" />
            <div className="skeleton b1-t2" />
          </div>
        </div>
        <div className="flex">
          <div className="b-1-pic">
            <div className="skeleton b1-img" />
          </div>
          <div className="text">
            <div className="skeleton b1-t1" />
            <div className="skeleton b1-t2" />
          </div>
        </div>
        <div className="flex">
          <div className="b-1-pic">
            <div className="skeleton b1-img" />
          </div>
          <div className="text">
            <div className="skeleton b1-t1" />
            <div className="skeleton b1-t2" />
          </div>
        </div>
        <div className="flex">
          <div className="b-1-pic">
            <div className="skeleton b1-img" />
          </div>
          <div className="text">
            <div className="skeleton b1-t1" />
            <div className="skeleton b1-t2" />
          </div>
        </div>
      </div>
    );
};

export default React.memo(ProductInfoLoader);