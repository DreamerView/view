import {memo} from 'react';
import { Link } from "react-router-dom";
import GetHistoryLocation from "../../locate";

const Item1 = (products)=> {
    const ScrollToTop = () => {
      window.scrollTo({top:0})
    }
    return(
        <div className="m-d-b">
              <Link onClick={ScrollToTop} className="m-p-b" to={`${GetHistoryLocation}/products/${products.item.id}`}>
                <div className="m-i-1-1">
                  <img loading="lazy" src={products.item.image} alt="Panakea 1" className="m-i" />
                </div>
                <div className="m-t-p">
                  <h1 className="m-t">{products.item.title}</h1>
                  <div className="l-t-p">
                    <h1 className="l-t">{products.item.content}</h1>
                    <div className="m-l-p">
                      <h1 className="l-p">{products.item.price}</h1>
                      <div className="p-p">
                        <div className="i-p-1">
                          <img loading="lazy" src={GetHistoryLocation+"/images/shopping-basket-add.svg"} alt="Panakea 1" className="p" />
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