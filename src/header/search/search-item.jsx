import GetHistoryLocation from "../../locate";
import { Link } from "react-router-dom";

const SearchItem = (item) => {
    return(
        <Link to={`${GetHistoryLocation}/products/${item.result.id}`} className="flex-search">
      <div className="block-picture-drugs">
        <div className="place-drugs-picture">
          <div className="picture-drugs-absolute">
            <img className="picture-drugs-relative" src={`${GetHistoryLocation}${item.result.image}`} alt="" />
          </div>
        </div>
      </div>
      <div className="block-drugs-text-in">
        <div className="place-name-drugs-in">
          <h1 className="name-drugs-in">{item.result.title}</h1>
        </div>
        <div className="place-middle-price-in">
          <h1 className="middle-price-in">Средняя цена в аптеках города <b>{item.result.price} ₸</b></h1>
        </div>
      </div>
    </Link>
    );
};

export default SearchItem;
