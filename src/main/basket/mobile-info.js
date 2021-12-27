import BasketMobile from "./mobile";

const MobileBasketInfo = () => {
    const s = JSON.parse(localStorage.getItem('basket-info'));
    return(
        <div className="main-block-your-basket">
            <h1 className="m-p">Ваша корзина</h1>
          <h1 className="m-p-content">У вас в корзине {localStorage.getItem('basket-info')? JSON.parse(localStorage.getItem("basket-info")).length:"0"} товара</h1>
        <div className="your-text-block-place">
            {localStorage.getItem('basket-info')?s.map(basket=><BasketMobile item={basket} key={basket.id}/>):""}
          {localStorage.getItem('basket-info')?<div>
          <div className="size-block">
              <div className="order-block">
                <div className="place-order">
                  <h1 className="order-name">Итог заказа</h1>
                  <h1 className="two-items">{localStorage.getItem('basket-info')? JSON.parse(localStorage.getItem("basket-info")).length:"0"} товара</h1>
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