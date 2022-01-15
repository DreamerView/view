import {memo} from 'react';
import { Link } from "react-router-dom";

const Item1 = (products)=> {
    const ScrollToTop = () => {
      window.scrollTo({top:0})
    }
    return(
        <div className="m-d-b">
              <Link onClick={ScrollToTop} className="m-p-b" to={`${process.env.PUBLIC_URL}/products/${products.item.id}`}>
                <div className="m-i-1-1">
                  <img loading="lazy" src={products.item.image?process.env.PUBLIC_URL + products.item.image:process.env.PUBLIC_URL+"/images/first-aid-alt.svg"} alt="Panakea 1" className="m-i" />
                </div>
                <div className="m-t-p">
                  {products.item.title?<h1 className="m-t">{products.item.title}</h1>:<><div className="skeleton m-t-loader"/><div className="skeleton m-t-1-loader"/></>}
                  <div className="l-t-p">
                    {products.item.content?<h1 className="l-t">{products.item.content.substring(0, 30)}</h1>:<div className="skeleton l-t-loader"/>}
                    <div className="m-l-p">
                      {products.item.price?<h1 className="l-p">{products.item.price} ₸</h1>:<div className="skeleton l-p-loader"/>}
                      <div className="p-p">
                        <div className="i-p-1">
                          <img loading="lazy" src={process.env.PUBLIC_URL+"/images/shopping-basket-add.svg"} alt="Panakea 1" className="p" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
    );
};

export default memo(Item1);