import GetHistoryLocation from "../../locate";

const DesktopBasket = ()=> {
    return(
        <div className="backet-p">
        <div className="img-basket-picture">
            <img className="img-backet" src={GetHistoryLocation+"/images/fur.jpg"} alt="Panakea 2" />
        </div>
        <div className="id-b">
          <h1 className="id-b-t1">ГлаксоСмитКляйн</h1>
          <h1 className="id-b-t2">Фурацилин Авексима шипучие таблетки</h1>
          <h1 className="id-b-t3">ID: 48943504</h1>
        </div>
        <div className="quantity-block">
            <div className="quantity">
                <button className="but">-</button>
                <div className="but-quantity-block">
                    <h1 className="but-quantity">100</h1>
                </div>
                <button className="but-p">+</button>
            </div>
        </div>
        <div className="priceb">
          <h1 className="price-backet">150,55 ₸</h1>
          <button className="add">Добавить в избранное</button>
          <button className="delete">Удалить из корзины</button>
        </div>
      </div>
    );
};

export default DesktopBasket;