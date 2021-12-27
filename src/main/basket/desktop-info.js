import DesktopBasket from "./desktop";

const DesktopBasketInfo = () => {
    const s = JSON.parse(localStorage.getItem('basket-info'));
    return(
        <div className="m">
        <div className="b-backet">
        <h1 className="u-backet">Ваша корзина</h1>
        <h1 className="product-b">У вас в корзине {JSON.parse(localStorage.getItem("basket-info")).length} товара</h1>
        <div className="grid-backet">
            {s.map(basket=><DesktopBasket item={basket} key={basket.id}/>)}
        </div>
        <div className="payment">
            <div className="payment-block">
                <div className="payment-flex">
                <div className="price-payment-0">
                <h1 className="result">Итог заказа</h1>
                <h1 className="quantity-payment">{JSON.parse(localStorage.getItem("basket-info")).length} товара</h1>
                </div>
                <div className="price-payment-1">
                <h1 className="price-payment">150,55 ₸</h1>
                </div>
                </div>
                <button className="pay">Оплатить</button>
            </div>
        </div>
      </div>
    </div>
    );
};

export default DesktopBasketInfo;