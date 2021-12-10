
const BasketMobile = (info) => {
    return(
          <div className="main-of-main">
            <div className="block-one-img-and-glakso">
              <div className="img-and-glakso">
                <div className="img-and-place">
                  <div className="relative-and-absolute">
                    <img className="img-size" src={info.item.image} alt="Panakea images" loading="lazy" />
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
                    <button className="button-minus">-</button>
                    <div className="one-block">
                      <h1 className="one">{info.item.number}</h1>
                    </div>
                    <button className="button-minus">+</button>
                  </div>
                </div>
                <div className="place-price">
                  <h1 className="price">{info.item.price}</h1>
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