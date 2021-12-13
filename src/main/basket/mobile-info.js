import BasketMobile from "./mobile";
import { useState } from "react";

const MobileBasketInfo = () => {

    const [baskets] = useState([
        {id:0,image:'/images/fur.jpg',production:'ГлаксоСмитКляйн',title:'Фурацилин Авексима шипучие таблетки',uid:'2281337',number:1,price:150.55},
        {id:1,image:'/images/fur.jpg',production:'ГлаксоСмитКляйн',title:'Фурацилин Авексима шипучие таблетки',uid:'2281337',number:1,price:150.55},
        {id:2,image:'/images/fur.jpg',production:'ГлаксоСмитКляйн',title:'Фурацилин Авексима шипучие таблетки',uid:'2281337',number:1,price:150.55}
    ]);
    localStorage.setItem('price-database',JSON.stringify(baskets));
    console.log(JSON.parse(localStorage.getItem('price-database')));
    return(
        <div className="main-block-your-basket">
            <h1 className="m-p">Ваша корзина</h1>
          <h1 className="m-p-content">У вас в корзине 2 товара</h1>
        <div className="your-text-block-place">
            {baskets.map(basket=><BasketMobile item={basket} key={basket.id}/>)}
          <div className="size-block">
              <div className="order-block">
                <div className="place-order">
                  <h1 className="order-name">Итог заказа</h1>
                  <h1 className="two-items">2 товара</h1>
                </div>
              </div>
              <div className="price-place-im-tired">
                <h1 className="money">155,55 ₸</h1>
              </div>
            </div>
            <button className="pay-for-it">Оплатить</button>
        </div>
      </div>
    );
};

export default MobileBasketInfo;