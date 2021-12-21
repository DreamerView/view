import ShowShop from "./show-shop";
import Product from "./product";
import ItemList1 from "../item-list1";
import ShowShopLoader from "./show-shop-loader";

const ShowInfo = () => {
    return(
    <div className="m">
        <div className="m-block">
            <div className="m-i-1-b">
            <div>
                <h1 className="characteristic">Характеристики</h1>
                <Product />
            </div>
            <div>
                <div className="c-b">
                <h1 className="c-b-t">Можете купить у</h1>
                <ShowShop id="maybe" />
                <ShowShopLoader />
                <button className="p-b-n-b">
                    Посмотреть еще варианты (14)
                </button>
                </div>
            </div>
            </div>
            {/* Аналоги */}
            <h1 className="m-p-1">Аналоги</h1>
            <ItemList1/>
        </div>
    </div>
    )
};

export default ShowInfo;