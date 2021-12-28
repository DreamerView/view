import DesktopBasket from "./desktop";
import { useState,useEffect } from "react";

const DesktopBasketInfo = () => {
    const [show,setShow] = useState(JSON.parse(localStorage.getItem('basket-info')));
    const [num,setNum] = useState(JSON.parse(localStorage.getItem('basket-info')).length);
    const RemoveBasket = (basket) => {
        setShow(show.filter(p=>p.id !==basket.id));
        setNum(num-1);
      };
      useEffect(() => {
        localStorage.setItem('basket-info',JSON.stringify(show));
      }, [show]);
    return(
        <div className="m">
        <div className="b-backet">
        <h1 className="u-backet">Ваша корзина</h1>
        <h1 className="product-b">У вас в корзине {localStorage.getItem('basket-info')? num:"0"} товара</h1>
        <div className="grid-backet">
            {localStorage.getItem('basket-info')?show.map(basket=><DesktopBasket remove={RemoveBasket} item={basket} key={basket.id}/>):""}
        </div>
        {num!==0?<div className="payment">
            <div className="payment-block">
                <div className="payment-flex">
                <div className="price-payment-0">
                <h1 className="result">Итог заказа</h1>
                <h1 className="quantity-payment">{localStorage.getItem('basket-info')? JSON.parse(localStorage.getItem("basket-info")).length:"0"} товара</h1>
                </div>
                <div className="price-payment-1">
                <h1 className="price-payment">150,55 ₸</h1>
                </div>
                </div>
                <button className="pay">Оплатить</button>
            </div>
        </div>:""}
      </div>
    </div>
    );
};

export default DesktopBasketInfo;