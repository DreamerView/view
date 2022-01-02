import BasketMobile from "./mobile";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";

const MobileBasketInfo = () => {
    const dispatch = useDispatch()
    let l,n;
    if(localStorage.getItem('basket-info')) {
      l=JSON.parse(localStorage.getItem('basket-info'));
      n=JSON.parse(localStorage.getItem('basket-info')).length;
    }
    else {l=[];n=0};
    const [show,setShow] = useState(l);
    const [num,setNum] = useState(n);
    const RemoveBasket = (basket) => {
      setShow(show.filter(p=>p.id !==basket.id));
      setNum(num-1);
      dispatch({type:"Minus_Local",payload:1});
    };
    useEffect(() => {
      localStorage.setItem('basket-info',JSON.stringify(show));
    }, [show]);
    return(
        <div className="main-block-your-basket">
            <h1 className="m-p">Ваша корзина</h1>
          <h1 className="m-p-content">У вас в корзине {localStorage.getItem('basket-info')? num:"0"} товара</h1>
        <div className="your-text-block-place">
            {localStorage.getItem('basket-info')?show.map(basket=><BasketMobile remove={RemoveBasket} item={basket} key={basket.id}/>):""}
          {num!==0?<div>
          <div className="size-block">
              <div className="order-block">
                <div className="place-order">
                  <h1 className="order-name">Итог заказа</h1>
                  <h1 className="two-items">{localStorage.getItem('basket-info')? num:"0"} товара</h1>
                </div>
              </div>
              <div className="price-place-im-tired">
                <h1 className="money">155,55 ₸</h1>
              </div>
            </div>
            <button className="pay-for-it">Оплатить</button>
          </div>:""}
        </div>
      </div>
    );
};

export default MobileBasketInfo;