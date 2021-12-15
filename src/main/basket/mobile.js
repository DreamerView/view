import { useState } from "react";
import GetHistoryLocation from "../../locate";

const BasketMobile = (info) => {
    const [pr,setPr] = useState(info.item.price);
    const [sum,setSum] = useState(info.item.number);
    const PlusSum = async() => {
      setSum(sum+1);
      setPr(((sum+1)*info.item.price).toFixed(2));
    };
    const MinusSum = () => {
      if(sum <= 1) return 0;
      else {
        setSum(sum-1);
        setPr((pr-info.item.price).toFixed(2));
      }
    };
    return(
          <div className="main-of-main">
            <div className="block-one-img-and-glakso">
              <div className="img-and-glakso">
                <div className="img-and-place">
                  <div className="relative-and-absolute">
                    <img className="img-size" src={GetHistoryLocation+info.item.image} alt="Panakea images" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="leader-text">
                <div className="place-glakso">
                  <h1 className="glakso-text-green">{info.item.production}</h1>
                </div>
                <div className="place-furak">
                  <h1 className="furak-text">{info.item.title}</h1>
                </div>
                <div className="place-furak">
                  <h1 className="id-text">ID: {info.item.uid}</h1>
                </div>
              </div>
            </div>
            <div className="w">
              <div className="we">
                <div className="place-scary-turn-off">
                  <div className="scary-turn-off">
                    <button type="button" onClick={MinusSum} className="button-minus">-</button>
                    <div className="one-block">
                      <h1 className="one">{sum}</h1>
                    </div>
                    <button type="button" onClick={PlusSum} className="button-minus">+</button>
                  </div>
                </div>
                <div className="place-price">
                  <h1 className="price">{pr} ₸</h1>
                </div>
              </div>
              <div className="grid">
                <div className="place-favorite">
                  <button className="favorite">Добавить в избранное</button>
                </div>
                <div className="del-from-favorite">
                  <button className="unfavorite">Удалить из корзины</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default BasketMobile;